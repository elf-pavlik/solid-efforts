import { useRouter } from "vue-router";
import { LdoBase, LdoDataset } from "@ldo/ldo";
import { createLdoDataset } from '@ldo/ldo';
import { parseJsonld } from '@janeirodigital/interop-utils';
import { DraftShapeType, ImplementationShapeType, PersonShapeType, ProductClassShapeType, ScopeShapeType } from '@/ldo/shapes.shapeTypes'
import type { Draft, Implementation, Person, ProductClass, Scope } from '@/ldo/shapes.typings';
import { data } from '@/data/index'

export type IRI = { '@id': string }

export function useLdo() {

  const router = useRouter()

  const ns = {
    rdf: {
      type: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
    },
    schema: {
      Person: 'http://schema.org/Person',
      author: 'http://schema.org/author',
      editor: 'http://schema.org/editor',
    },
    ex: {
      Primer: 'https://vocab.example/Primer',
      Specification: 'https://vocab.example/Specification',
      Draft: 'https://vocab.example/Draft',
      ProductClass: 'https://vocab.example/ProductClass',
      Scope: 'https://vocab.example/Scope',
      Implementation: 'https://vocab.example/Implementation',
      Application: 'https://vocab.example/Application',
      Module: 'https://vocab.example/Module',
      Service: 'https://vocab.example/Service',
      maintainer: 'https://vocab.example/maintainer',
      contributor: 'https://vocab.example/contributor',
      specifies: 'https://vocab.example/specifies',
      explains: 'https://vocab.example/explains',
      implements: 'https://vocab.example/implements',
      accesses: 'https://vocab.example/accesses',
      dependency: 'https://vocab.example/dependency',
    },
    wikidata: {
      typescript: 'http://www.wikidata.org/entity/Q978185',
      java: 'http://www.wikidata.org/entity/Q251',
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
    const rawDataset = await parseJsonld(JSON.stringify(data))
    dataset = createLdoDataset([...rawDataset])
  }

  function getPeople(): Person[] {
    return dataset
      .usingType(PersonShapeType)
      .matchSubject(ns.rdf.type, ns.schema.Person)
  }

  function getPerson(id: string): Person {
    return dataset
      .usingType(PersonShapeType)
      .fromSubject(id)
  }

  function getDrafts(): Draft[] {
    return dataset
      .usingType(DraftShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Draft)
  }

  function getDraft(id: string): Draft {
    return dataset
      .usingType(DraftShapeType)
      .fromSubject(id)
  }

  function getProductClasses(): ProductClass[] {
    return dataset
      .usingType(ProductClassShapeType)
      .matchSubject(ns.rdf.type, ns.ex.ProductClass)
  }

  function getScopes(): Scope[] {
    return dataset
      .usingType(ScopeShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Scope)
  }

  function getScope(id: string): Scope {
    return dataset
      .usingType(ScopeShapeType)
      .fromSubject(id)
  }

  function getProduct(id: string): ProductClass {
    return dataset
      .usingType(ProductClassShapeType)
      .fromSubject(id)
  }

  function getApplications(): Implementation[] {
    return dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Application)
  }

  function getModules(): Implementation[] {
    return dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Module)
  }

  function getServices(): Implementation[] {
    return dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Service)
  }

  function getImplementation(id: string): Implementation {
    return dataset
      .usingType(ImplementationShapeType)
      .fromSubject(id)
  }

  function getDraftsForPerson(id: string): Draft[] {
    const authored = dataset
      .usingType(DraftShapeType)
      .matchSubject(ns.schema.author, id)
    const edited = dataset
      .usingType(DraftShapeType)
      .matchSubject(ns.schema.editor, id)
    return [...edited, ...authored].reduce(
      (acc, draft) => acc.find(d => d['@id'] === draft["@id"]) ? acc : [...acc, draft],
      [] as Draft[]
    )
  }

  function getImplementationsForPerson(id: string, type: string): Implementation[] {
    const maintainedImpl = dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.ex.maintainer, id)
    // @ts-expect-error
    const maintained = maintainedImpl.filter(i => i.type.find((t: IRI) => t['@id'] === type))
    const contributedImpl = dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.ex.contributor, id)
    // @ts-expect-error
    const contributed = contributedImpl.filter(i => i.type.find((t: IRI) => t['@id'] === type))
    return [...maintained, ...contributed].reduce(
      (acc, impl) => acc.find(d => d['@id'] === impl["@id"]) ? acc : [...acc, impl],
      [] as Implementation[]
    )
  }

  function getApplicationsForPerson(id: string): Implementation[] {
    return getImplementationsForPerson(id, ns.ex.Application)
  }

  function getModulesForPerson(id: string): Implementation[] {
    return getImplementationsForPerson(id, ns.ex.Module)
  }
  
  function getServicesForPerson(id: string): Implementation[] {
    return getImplementationsForPerson(id, ns.ex.Service)
  }

  function getSpecificationForProduct(id: string): Draft {
    return dataset
      .usingType(DraftShapeType)
      .matchSubject(ns.ex.specifies, id)[0]
  }

  function getPrimersForSpecification(id: string): Draft[] {
    return dataset
      .usingType(DraftShapeType)
      .matchSubject(ns.ex.explains, id)
  }

  function getImplementationsForProduct(id: string): Implementation[] {
    return dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.ex.implements, id)
  }

  function getNonModulesForProduct(id: string): Implementation[] {
    const all = dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.ex.implements, id)
    // @ts-expect-error
    return all.filter(impl => !impl.type.find((t: IRI) => t['@id'] === ns.ex.Module))
  }

  function getModulesForProduct(id: string): Implementation[] {
    const all = dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.ex.implements, id)
    // @ts-expect-error
    return all.filter(impl => impl.type.find((t: IRI) => t['@id'] === ns.ex.Module))
  }

  function getApplicationsForModule(id: string): Implementation[] {
    return dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.ex.dependency, id)
  }

  function getApplicationsForScope(id: string): Implementation[] {
    return dataset
      .usingType(ImplementationShapeType)
      .matchSubject(ns.ex.accesses, id)
  }

  function draftIcon (draft: Draft) {
    // @ts-expect-error
    if (draft.type.find((t: IRI) => t['@id'] === ns.ex.Primer)) {
      return 'mdi-information-outline'
    }
    // @ts-expect-error
    if (draft.type.find((t: IRI) => t['@id'] === ns.ex.Specification)) {
      return 'mdi-alert-box-outline'
    }
    return 'mdi-help-box-outline'
  }

  function implementationIcon(implementation: Implementation) {
    switch (implementation.programmingLanguage["@id"]) {
      case ns.wikidata.typescript:
        return 'mdi-language-typescript'
      case ns.wikidata.java:
        return 'mdi-language-java'
      default:
       return 'mdi-help-box-outline'
    }
  }

  function applicationIcon(implementation: Implementation) {
    if (!implementation.framework) return 'mdi-cellphone'
    switch (implementation.framework["@id"]) {
      case 'https://vuejs.org/':
        return 'mdi-vuejs'
      default:
        return 'mdi-cellphone'

    }
  }

  function scopeIcon(scope: Scope) {
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

  function implementationTypeIcon(implementation: Implementation) {
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
  
  function isEditor(draft: Draft, person: Person) {
    // @ts-expect-error
    return draft.editor.find((p: Person) => p['@id'] === person['@id'])
  }

  function isAuthor(draft: Draft, person: Person) {
    // @ts-expect-error
    return draft.author.find((p: Person) => p['@id'] === person['@id'])
  }

  function isMaintainer(impl: Implementation, person: Person) {
    // @ts-expect-error
    return impl.maintainer.find((p: Person) => p['@id'] === person['@id'])
  }

  function isContributor(impl: Implementation, person: Person) {
    // @ts-expect-error
    return impl.contributor.find((p: Person) => p['@id'] === person['@id'])
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
    if (entity.type['@id'] === 'Draft' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Draft')) {
      name = 'draft'
    }
    if (entity.type['@id'] === 'Implementation' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Implementation')) {
      name = 'implementation'
    }
    if (entity.type['@id'] === 'ProductClass' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'ProductClass')) {
      name = 'product'
    }
    if (entity.type['@id'] === 'Scope' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Scope')) {
      name = 'scope'
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
    show
  }
}
