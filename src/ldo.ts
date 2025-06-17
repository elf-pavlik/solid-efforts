import { useRouter } from "vue-router";
import { LdoBase, LdoDataset } from "@ldo/ldo";
import { createLdoDataset } from '@ldo/ldo';
import { parseJsonld } from '@janeirodigital/interop-utils';
// @ts-ignore
import dataFactory from '@rdfjs/data-model'
import { SpecificationShapeType, SoftwareShapeType, PersonShapeType, ClassOfProductShapeType, CreativeWorkShapeType } from '@/ldo/shapes.shapeTypes'
import type { Specification, Software, Person, ClassOfProduct, CreativeWork } from '@/ldo/shapes.typings';
import data from "./data.json"

export type IRI = { '@id': string }

export function robohash(id: string) {
  return `https://robohash.org/${encodeURIComponent(id)}.png?set=set3`
}

export function useLdo() {

  const router = useRouter()
  const ns = {
    rdf: {
      type: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
    },
    con: {
      Server: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#Server',
      SoftwareLibrary: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#SoftwareLibrary',
      ProductivityApp: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#ProductivityApp',
      PodApp: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#PodApp',
      LeisureApp: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#LeisureApp',
      OtherApp: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#OtherApp',
      Primer: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#Primer',
      ResearchPaper: 'https://solidproject.solidcommunity.net/catalog/v2/catalog-skos.ttl#ResearchPaper',
    },
    ex: {
      subType: 'http://example.org/#subType',
      Person: 'http://example.org/#Person',
      author: 'http://example.org/#author',
      editor: 'http://example.org/#editor',
      Primer: 'http://example.org/#Primer',
      Specification: 'http://example.org/#Specification',
      Draft: 'http://example.org/#Draft',
      ClassOfProduct: 'http://example.org/#ClassOfProduct',
      Scope: 'http://example.org/#Scope',
      Product: 'http://example.org/#Product',
      Software: 'http://example.org/#Software',
      Application: 'http://example.org/#Application',
      Module: 'http://example.org/#Module',
      Service: 'http://example.org/#Service',
      maintainer: 'http://example.org/#maintainer',
      developer: 'http://example.org/#developer',
      specifies: 'http://example.org/#specifies',
      explains: 'http://example.org/#explains',
      implements: 'http://example.org/#implements',
      accesses: 'http://example.org/#accesses',
      hasDependencyOn: 'http://example.org/#hasDependencyOn',
      definesConformanceFor: 'http://example.org/#definesConformanceFor',
      conformsTo: 'http://example.org/#conformsTo',
      about: 'http://example.org/#about',
    },
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

  async function createDataset(): Promise<void> {
    if (dataset) return
    // const response = await fetch('https://solidproject.solidcommunity.net/catalog/v2/catalog-data.ttl', { headers: { Accept: 'application/ld+json' } })
    // const rawDataset = await parseJsonld(await response.text())
    const rawDataset = await parseJsonld(JSON.stringify(data))
    dataset = createLdoDataset([...rawDataset])
  }

  function filterPeople(list: Person[]): Person[] {
    return list.filter(person => dataset.match(null, dataFactory.namedNode(ns.ex.author), dataFactory.namedNode(person['@id'])).size
      || dataset.match(null, dataFactory.namedNode(ns.ex.editor), dataFactory.namedNode(person['@id'])).size
      || dataset.match(null, dataFactory.namedNode(ns.ex.maintainer), dataFactory.namedNode(person['@id'])).size
      || dataset.match(null, dataFactory.namedNode(ns.ex.developer), dataFactory.namedNode(person['@id'])).size)
  }

  function getPeople(): Person[] {
    return filterPeople(dataset
      .usingType(PersonShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Person))
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
      .usingType(SpecificationShapeType) // TODO: handle primers
      .fromSubject(id)
  }

  function getProductClasses(): ClassOfProduct[] {
    return dataset
      .usingType(ClassOfProductShapeType)
      .matchSubject(ns.rdf.type, ns.ex.ClassOfProduct)
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
    return filterApplications(dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Software))
  }

  function filterModules(list: Software[]): Software[] {
    return list.filter(software => dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.SoftwareLibrary)).size)
  }

  function getModules(): Software[] {
    return filterModules(dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Software))
  }

  function filterServices(list: Software[]): Software[] {
    return list.filter(software => dataset.match(dataFactory.namedNode(software['@id']), dataFactory.namedNode(ns.ex.subType), dataFactory.namedNode(ns.con.Server)).size)
  }

  function getServices(): Software[] {
    return filterServices(dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Software))
  }

  function getImplementation(id: string): Software {
    return dataset
      .usingType(SoftwareShapeType)
      .fromSubject(id)
  }

  function getPapers(): CreativeWork[] {
    return dataset
      .usingType(CreativeWorkShapeType)
      .matchSubject(ns.ex.subType, ns.con.ResearchPaper)
  }

  function getPaper(id: string): CreativeWork {
    return dataset
      .usingType(CreativeWorkShapeType)
      .fromSubject(id)
  }

  function getPapersForDraft(id: string): CreativeWork[] {
    return dataset
      .usingType(CreativeWorkShapeType)
      .matchSubject(ns.ex.about, id)
      .filter(work => work.subType.find((t: IRI) => t['@id'] === ns.con.ResearchPaper))
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
    return dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.ex.definesConformanceFor, id)[0]
  }

  function getPrimersForSpecification(id: string): CreativeWork[] {
    return dataset
      .usingType(CreativeWorkShapeType)
      .matchSubject(ns.ex.about, id)
      .filter(work => work.subType.find((t: IRI) => t['@id'] === ns.con.Primer))
  }

  function getImplementationsForProduct(id: string): Software[] {
    return dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.conformsTo, id)
  }

  function getNonModulesForProduct(id: string): Software[] {
    return filterServices(dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.conformsTo, id))
  }

  function getModulesForProduct(id: string): Software[] {
    return filterModules(dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.conformsTo, id))
  }

  function getApplicationsForModule(id: string): Software[] {
    return dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.hasDependencyOn, id)
  }

  function getApplicationsForScope(id: string): Software[] {
    return dataset
      .usingType(SoftwareShapeType)
      .matchSubject(ns.ex.accesses, id)
  }

  function draftIcon(draft: Specification | CreativeWork) {
    // @ts-expect-error
    if (draft?.subType.find((t: IRI) => t['@id'] === ns.con.Primer)) {
      return 'mdi-information-outline'
    }
    // @ts-expect-error
    if (draft.type.find((t: IRI) => t['@id'] === 'Specification')) {
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
    // @ts-expect-error
    if (implementation.type.find((t: IRI) => t['@id'] === ns.ex.Module)) {
      return implementationIcon(implementation)
    }
    // @ts-expect-error
    if (implementation.type.find((t: IRI) => t['@id'] === ns.ex.Application)) {
      return 'mdi-cellphone'
    }
    // @ts-expect-error
    if (implementation.type.find((t: IRI) => t['@id'] === ns.ex.Service)) {
      return 'mdi-server'
    }
    return 'mdi-help-box-outline'
  }

  function isEditor(draft: Specification | CreativeWork, person: Person) {
    // @ts-expect-error
    return draft.editor.find((p: Person) => p['@id'] === person['@id'])
  }

  function isAuthor(draft: Specification | CreativeWork, person: Person) {
    // @ts-expect-error
    return draft.author.find((p: Person) => p['@id'] === person['@id'])
  }

  function isMaintainer(impl: Software, person: Person) {
    // @ts-expect-error
    return impl.maintainer.find((p: Person) => p['@id'] === person['@id'])
  }

  function isContributor(impl: Software, person: Person) {
    // @ts-expect-error
    return impl.developer.find((p: Person) => p['@id'] === person['@id'])
  }

  function getCoverage(id: string): number {
    return Math.round(Math.random() * 100)
  }

  function getConformance(implId: string, productId: string): number {
    return Math.round(Math.random() * 100)
  }

  function show(entity: LdoBase): void {
    let name: string = 'not-found'
    if (entity.type['@id'] === 'Person' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Person')) {
      name = 'person'
    }
    if (entity.type?.find((t: IRI) => t['@id'] === 'Specification') || entity.subType?.find((t: IRI) => t['@id'] === ns.con.Primer)) {
      name = 'draft'
    }
    if (entity.type['@id'] === 'Software' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Software')) {
      name = 'implementation'
    }
    if (entity.type['@id']?.includes('ClassOfProduct') || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'].includes('ClassOfProduct'))) {
      name = 'product'
    }
    if (entity.type['@id'] === 'Scope' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Scope')) {
      name = 'scope'
    }
    if (entity.subType?.find((t: IRI) => t['@id'] === ns.con.ResearchPaper)) {
      name = 'paper'
    }
    router.push({ name, query: { id: entity['@id'] } })
  }

  return {
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
