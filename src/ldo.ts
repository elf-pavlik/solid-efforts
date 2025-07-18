import { ref, shallowRef } from "vue"
import { useRouter } from "vue-router";
import { LdoBase, LdoDataset, getDataset, parseRdf } from "@ldo/ldo";
import { datasetToString } from "@ldo/rdf-utils"
import { createVocabulary } from 'rdf-vocabulary'
// @ts-ignore
import dataFactory from '@rdfjs/data-model'
import { SpecificationShapeType, SoftwareShapeType, PersonShapeType, ClassOfProductShapeType, CreativeWorkShapeType } from '@/ldo/shapes.shapeTypes'
import type { Specification, Software, Person, ClassOfProduct, CreativeWork } from '@/ldo/shapes.typings';

export type IRI = { '@id': string }

export function robohash(id: string) {
  return `https://robohash.org/${encodeURIComponent(id)}.png?set=set3`
}

const editMode = ref(!!localStorage.data)
const editor = ref(false)
const resource = shallowRef()
const editorProperty = ref()
const editorTitle = ref()
const editorOptions = ref<any[]>([])
const editorSelected = shallowRef<any[]>([])

export function useLdo() {

  const router = useRouter()
  const ns = {
    rdf: createVocabulary('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'type'),
    con: createVocabulary('https://solidproject.solidcommunity.net/catalog/taxonomy#',
      'PodServer',
      'SoftwareLibrary',
      'ProductivityApp',
      'PodApp',
      'LeisureApp',
      'OtherApp',
      'Primer',
      'Specification',
      'ResearchPaper'),
    ex: createVocabulary('http://example.org#',
      'subType',
      'Person',
      'author',
      'editor',
      'Specification',
      'Draft',
      'ClassOfProduct',
      'Scope',
      'Product',
      'Software',
      'Application',
      'Module',
      'Service',
      'maintainer',
      'developer',
      'specifies',
      'explains',
      'implements',
      'accesses',
      'hasDependencyOn',
      'definesConformanceFor',
      'conformsTo',
      'about',
    ),
    wikidata: {
      typescript: 'http://www.wikidata.org/entity/Q978185',
      java: 'http://www.wikidata.org/entity/Q251',
      rust: 'http://www.wikidata.org/entity/Q575650',
    },
    data: {
      Contacts: 'https://data.example/Contacts',
      Calendars: 'https://data.example/Calendars',
      Tasks: 'https://data.example/Tasks',
      Images: 'https://data.example/Images',
      Videos: 'https://data.example/Videos',
    }
  }

  let dataset: LdoDataset

  async function fetchCatalog(): Promise<string> {
    const catalogUrl = 'https://solidproject.solidcommunity.net/catalog/v2/catalog-data.ttl'
    const response = await fetch(catalogUrl, { headers: { Accept: 'text/turtle' } })
    return response.text()
  }

  async function createDataset(force = false): Promise<void> {
    if (!force && dataset) return
    const catalogTtl = localStorage.data ?? await fetchCatalog()
    dataset = await parseRdf(catalogTtl)
  }

  async function startEdit() {
    try {
      // Open file picker
      // @ts-ignore
      const [fileHandle] = await window.showOpenFilePicker({
        types: [
          {
            description: "Data",
            accept: {
              "text/turtle": [".ttl"],
            },
          },
        ],
      });

      // Get file contents
      const file = await fileHandle.getFile();
      const contents = await file.text();
      dataset = await parseRdf(contents)
      localStorage.setItem('data', contents)
      editMode.value = true
    } catch (err) {
      // @ts-ignore
      if (err.name !== 'AbortError') {
        console.warn('User cancelled');
        console.error(err);
      }
    }
  }

  async function abortEdit() {
    localStorage.removeItem('data')
    editMode.value = false
    await createDataset(true)
  }


  function openEditor(prop: string, title: string) {
    editor.value = true
    editorProperty.value = prop
    editorTitle.value = title
    // TODO: generalize
    editorOptions.value = getPeople()
  }

  function saveFile() {
    const catalogTtl = datasetToString(getDataset(resource.value), { format: 'Turtle' })
    localStorage.setItem('data', catalogTtl)
  }

  async function exportFile() {
    try {
      // Create a new file handle
      // @ts-ignore
      const handle = await window.showSaveFilePicker({
        suggestedName: 'catalog-data.ttl',
        types: [{
          description: 'Data',
          accept: { 'text/turtle': ['.ttl'] },
        }],
      });

      // Create a FileSystemWritableFileStream to write to
      const writable = await handle.createWritable();

      // Write the content
      const content = datasetToString(getDataset(resource.value), { format: 'Turtle' })
      await writable.write(content);

      // Close the file
      await writable.close();
    } catch (err) {
      // @ts-ignore
      if (err.name === 'AbortError') {
        console.warn('User cancelled');
        return; // User cancelled
      }
      console.error('Error saving file:', err);
    }
  }

  function filterPeople(list: Person[]): Person[] {
    return list.filter(person => dataset.match(null, dataFactory.namedNode(ns.ex.author), dataFactory.namedNode(person['@id'])).size
      || dataset.match(null, dataFactory.namedNode(ns.ex.editor), dataFactory.namedNode(person['@id'])).size
      || dataset.match(null, dataFactory.namedNode(ns.ex.maintainer), dataFactory.namedNode(person['@id'])).size
      || dataset.match(null, dataFactory.namedNode(ns.ex.developer), dataFactory.namedNode(person['@id'])).size)
  }

  function getPeople(filter = false): Person[] {
    const people = [...dataset
      .usingType(PersonShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Person)]
    return filter ? filterPeople(people) : people
  }

  function getPerson(id: string): Person {
    return dataset
      .usingType(PersonShapeType)
      .fromSubject(id)
  }

  function getDrafts(): (Specification | CreativeWork)[] {
    return [
      ...dataset
        .usingType(SpecificationShapeType)
        .matchSubject(ns.rdf.type, ns.ex.Specification),
      ...dataset
        .usingType(CreativeWorkShapeType)
        .matchSubject(ns.ex.subType, ns.con.Primer),
    ]
  }

  function getDraft(id: string): Specification | CreativeWork {
    return dataset
      .usingType(SpecificationShapeType)
      .fromSubject(id)
  }

  function getProductClasses(): ClassOfProduct[] {
    return [...dataset
      .usingType(ClassOfProductShapeType)
      .matchSubject(ns.rdf.type, ns.ex.ClassOfProduct)]
  }

  function getScopes(): any[] { // Scope[] {
    return []
    // return dataset
    //   .usingType(ScopeShapeType)
    //   .matchSubject(ns.rdf.type, ns.ex.Scope)
  }

  function getScope(): any { // Scope {
    return []
    // return dataset
    //   .usingType(ScopeShapeType)
    //   .fromSubject(id)
  }

  function getProduct(id: string): ClassOfProduct {
    return dataset
      .usingType(ClassOfProductShapeType)
      .fromSubject(id)
  }

  function filterApplications(list: Software[]): Software[] {
    return list.filter(software => dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.OtherApp)).size
      || dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.LeisureApp)).size
      || dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.PodApp)).size
      || dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.ProductivityApp)).size
    )
  }

  function getApplications(): Software[] {
    return filterApplications([...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Software)])
  }

  function filterModules(list: Software[]): Software[] {
    return list.filter(software => dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.SoftwareLibrary)).size)
  }

  function getModules(): Software[] {
    return filterModules([...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Software)])
  }

  function filterServices(list: Software[]): Software[] {
    return list.filter(software => dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.PodServer)).size)
  }

  function getServices(): Software[] {
    return filterServices([...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Software)])
  }

  function getImplementation(id: string): Software {
    return dataset
      .usingType(SoftwareShapeType)
      .fromSubject(id)
  }

  function getPapers(): CreativeWork[] {
    return [...dataset
      .usingType(CreativeWorkShapeType)
      .matchSubject(ns.ex.subType, ns.con.ResearchPaper)]
  }

  function getPaper(id: string): CreativeWork {
    return dataset
      .usingType(CreativeWorkShapeType)
      .fromSubject(id)
  }

  function getPapersForDraft(id: string): CreativeWork[] {
    return [...dataset
      .usingType(CreativeWorkShapeType)
      .matchSubject(ns.ex.about, id)]
      .filter(work => [...work.subType].find((t: IRI) => t['@id'] === 'ResearchPaper'))
  }

  function getDraftsForPerson(id: string): Specification[] {
    const authored = dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.ex.author, id)
    const edited = dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.ex.editor, id)
    return [...edited, ...authored].reduce(
      // @ts-ignore
      (acc, draft) => acc.find(d => d['@id'] === draft["@id"]) ? acc : [...acc, draft],
      [] as Specification[]
    )
  }

  function getImplementationsForPerson(id: string): Software[] {
    const maintainedImpl = dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.maintainer, id)
    const contributedImpl = dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.developer, id)
    return [...maintainedImpl, ...contributedImpl].reduce(
      // @ts-ignore
      (acc, impl) => acc.find(d => d['@id'] === impl["@id"]) ? acc : [...acc, impl],
      [] as Software[]
    )
  }


  function getApplicationsForPerson(id: string): Software[] {
    return filterApplications(getImplementationsForPerson(id))
  }

  function getModulesForPerson(id: string): Software[] {
    return filterModules(getImplementationsForPerson(id))
  }

  function getServicesForPerson(id: string): Software[] {
    return filterServices(getImplementationsForPerson(id))
  }

  function getSpecificationForProduct(id: string): Specification {
    return [...dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.ex.definesConformanceFor, id)][0]
  }

  function getPrimersForSpecification(id: string): CreativeWork[] {
    return [...dataset
      .usingType(CreativeWorkShapeType)
      .matchSubject(ns.ex.about, id)]
      .filter(work => [...work.subType].find((t: IRI) => t['@id'] === 'Primer'))
  }

  function getImplementationsForProduct(id: string): Software[] {
    return [...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.conformsTo, id)]
  }

  function getNonModulesForProduct(id: string): Software[] {
    return filterServices([...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.conformsTo, id)])
  }

  function getModulesForProduct(id: string): Software[] {
    return filterModules([...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.conformsTo, id)])
  }

  function getApplicationsForModule(id: string): Software[] {
    return [...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.hasDependencyOn, id)]
  }

  function getApplicationsForScope(id: string): Software[] {
    return [...dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.accesses, id)]
  }

  function draftIcon(draft: Specification | CreativeWork) {
    // @ts-expect-error
    if ([...draft.subType].find((t: IRI) => t['@id'] === 'Primer')) {
      return 'mdi-information-outline'
    }
    // @ts-expect-error
    if (draft.type['@id'] === 'Specification') {
      return 'mdi-alert-box-outline'
    }
    return 'mdi-help-box-outline'
  }

  function implementationIcon(implementation: any) {
    return 'mdi-help-box-outline'
    // switch (implementation.programmingLanguage["@id"]) {
    //   case ns.wikidata.typescript:
    //     return 'mdi-language-typescript'
    //   case ns.wikidata.java:
    //     return 'mdi-language-java'
    //   case ns.wikidata.rust:
    //     return 'mdi-language-rust'
    //   default:
    //     return 'mdi-help-box-outline'
    // }
  }

  function applicationIcon(implementation: Software) {
    return 'mdi-cellphone'
    // if (!implementation.framework) return 'mdi-cellphone'
    // switch (implementation.framework["@id"]) {
    //   case 'https://vuejs.org/':
    //     return 'mdi-vuejs'
    //   default:
    //     return 'mdi-cellphone'
    //
    // }
  }

  function scopeIcon(scope: any/* Scope */) {
    return 'mdi-flask-empty-outline'
    switch (scope["@id"]) {
      case ns.data.Calendars:
        return 'mdi-calendar-blank'
      case ns.data.Contacts:
        return 'mdi-account-box-outline'
      case ns.data.Tasks:
        return 'mdi-sticker-check-outline'
      case ns.data.Images:
        return 'mdi-image-outline'
      case ns.data.Videos:
        return 'mdi-video-outline'
      default:
        return 'mdi-flask-empty-outline'

    }
  }

  function implementationTypeIcon(implementation: Software) {
    if ([...implementation.subType].find((t: IRI) => t['@id'] === 'SoftwareLibrary')) {
      return implementationIcon(implementation)
    }
    // TODO: add other app categories
    if ([...implementation.subType].find((t: IRI) => t['@id'] === 'OtherApp')) {
      return 'mdi-cellphone'
    }
    if ([...implementation.subType].find((t: IRI) => t['@id'] === 'PodServer')) {
      return 'mdi-server'
    }
    return 'mdi-help-box-outline'
  }

  function isEditor(draft: Specification | CreativeWork, person: Person) {
    //@ts-expect-error
    return [...draft.editor!].find((p: Person) => p['@id'] === person['@id'])
  }

  function isAuthor(draft: Specification | CreativeWork, person: Person) {
    //@ts-expect-error
    return [...draft.author!].find((p: Person) => p['@id'] === person['@id'])
  }

  function isMaintainer(impl: Software, person: Person) {
    //@ts-expect-error
    return [...impl.maintainer!].find((p: Person) => p['@id'] === person['@id'])
  }

  function isContributor(impl: Software, person: Person) {
    //@ts-expect-error
    return [...impl.developer!].find((p: Person) => p['@id'] === person['@id'])
  }

  function getCoverage(id: string): number {
    return Math.round(Math.random() * 100)
  }

  function getConformance(implId: string, productId: string): number {
    return Math.round(Math.random() * 100)
  }

  function show(entity: LdoBase): void {
    let name: string = 'not-found'
    const types = entity.type.size ? [...entity.type] : [entity.type]
    if (types.find((t: IRI) => t['@id'] === 'Person')) {
      name = 'person'
    }
    if (types.find((t: IRI) => t['@id'] === 'Specification') || [...entity.subType].find(c => c['@id'] === 'Primer')) {
      name = 'draft'
    }
    if (types.find((t: IRI) => t['@id'] === 'Software')) {
      name = 'implementation'
    }
    if (types.find((t: IRI) => t['@id'] === ns.ex.ClassOfProduct)) {
      name = 'product'
    }
    if ([...entity.subType].find(c => c['@id'] === 'ResearchPaper')) {
      name = 'paper'
    }
    router.push({ name, query: { id: entity['@id'] } })
  }

  return {
    editMode,
    editor,
    resource,
    editorProperty,
    editorTitle,
    editorOptions,
    editorSelected,
    startEdit,
    abortEdit,
    openEditor,
    saveFile,
    exportFile,
    createDataset,
    getPeople,
    getPerson,
    getDrafts,
    getApplications,
    getDraft,
    getProductClasses,
    getScopes,
    getScope,
    getProduct,
    getModules,
    getServices,
    getImplementation,
    getPapers,
    getPaper,
    getPapersForDraft,
    getDraftsForPerson,
    getApplicationsForPerson,
    getModulesForPerson,
    getServicesForPerson,
    getSpecificationForProduct,
    getPrimersForSpecification,
    getImplementationsForProduct,
    getNonModulesForProduct,
    getModulesForProduct,
    getApplicationsForModule,
    getApplicationsForScope,
    draftIcon,
    implementationIcon,
    applicationIcon,
    scopeIcon,
    implementationTypeIcon,
    isEditor,
    isAuthor,
    isMaintainer,
    isContributor,
    getCoverage,
    getConformance,
    show,
  }
}
