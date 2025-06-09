import { useRouter } from "vue-router";
import { LdoBase, LdoDataset } from "@ldo/ldo";
import { createLdoDataset } from '@ldo/ldo';
import { parseJsonld } from '@janeirodigital/interop-utils';
import { SpecificationShapeType, ProductShapeType, PersonShapeType, ClassOfProductShapeType } from '@/ldo/shapes.shapeTypes'
import type { Specification, Product, Person, ClassOfProduct } from '@/ldo/shapes.typings';

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
    schema: {
      Person: 'http://example.org/#Person',
      author: 'http://schema.org/author',
      editor: 'http://schema.org/editor',
    },
    ex: {
      Primer: 'http://example.org/#Primer',
      Specification: 'http://example.org/#Specification',
      Draft: 'http://example.org/#Draft',
      ClassOfProduct: 'http://example.org/#ClassOfProduct',
      Scope: 'http://example.org/#Scope',
      Product: 'http://example.org/#Product',
      Application: 'http://example.org/#Application',
      Module: 'http://example.org/#Module',
      Service: 'http://example.org/#Service',
      maintainer: 'http://example.org/#maintainer',
      contributor: 'http://example.org/#contributor',
      specifies: 'http://example.org/#specifies',
      explains: 'http://example.org/#explains',
      implements: 'http://example.org/#implements',
      accesses: 'http://example.org/#accesses',
      dependency: 'http://example.org/#dependency',
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
    const response = await fetch('https://solidproject.solidcommunity.net/catalog/v2/catalog-data.ttl', { headers: { Accept: 'application/ld+json' } })
    const rawDataset = await parseJsonld(await response.text())
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

  function getDrafts(): Specification[] {
    return dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Specification)
  }

  function getDraft(id: string): Specification {
    return dataset
      .usingType(SpecificationShapeType)
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

  function getApplications(): Product[] {
    return dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Application)
  }

  function getModules(): Product[] {
    return dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Module)
  }

  function getServices(): Product[] {
    return dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.rdf.type, ns.ex.Service)
  }

  function getImplementation(id: string): Product {
    return dataset
      .usingType(ProductShapeType)
      .fromSubject(id)
  }

  function getDraftsForPerson(id: string): Specification[] {
    const authored = dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.schema.author, id)
    const edited = dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.schema.editor, id)
    return [...edited, ...authored].reduce(
      (acc, draft) => acc.find(d => d['@id'] === draft["@id"]) ? acc : [...acc, draft],
      [] as Specification[]
    )
  }

  function getImplementationsForPerson(id: string, type: string): Product[] {
    const maintainedImpl = dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.ex.maintainer, id)
    // @ts-expect-error
    const maintained = maintainedImpl.filter(i => i.type.find((t: IRI) => t['@id'] === type))
    const contributedImpl = dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.ex.contributor, id)
    // @ts-expect-error
    const contributed = contributedImpl.filter(i => i.type.find((t: IRI) => t['@id'] === type))
    return [...maintained, ...contributed].reduce(
      (acc, impl) => acc.find(d => d['@id'] === impl["@id"]) ? acc : [...acc, impl],
      [] as Product[]
    )
  }

  function getApplicationsForPerson(id: string): Product[] {
    return getImplementationsForPerson(id, ns.ex.Application)
  }

  function getModulesForPerson(id: string): Product[] {
    return getImplementationsForPerson(id, ns.ex.Module)
  }

  function getServicesForPerson(id: string): Product[] {
    return getImplementationsForPerson(id, ns.ex.Service)
  }

  function getSpecificationForProduct(id: string): Specification {
    return dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.ex.specifies, id)[0]
  }

  function getPrimersForSpecification(id: string): Specification[] {
    return dataset
      .usingType(SpecificationShapeType)
      .matchSubject(ns.ex.explains, id)
  }

  function getImplementationsForProduct(id: string): Product[] {
    return dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.ex.implements, id)
  }

  function getNonModulesForProduct(id: string): Product[] {
    const all = dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.ex.implements, id)
    // @ts-expect-error
    return all.filter(impl => !impl.type.find((t: IRI) => t['@id'] === ns.ex.Module))
  }

  function getModulesForProduct(id: string): Product[] {
    const all = dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.ex.implements, id)
    // @ts-expect-error
    return all.filter(impl => impl.type.find((t: IRI) => t['@id'] === ns.ex.Module))
  }

  function getApplicationsForModule(id: string): Product[] {
    return dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.ex.dependency, id)
  }

  function getApplicationsForScope(id: string): Product[] {
    return dataset
      .usingType(ProductShapeType)
      .matchSubject(ns.ex.accesses, id)
  }

  function draftIcon(draft: Specification) {
    return 'mdi-help-box-outline'
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

  function implementationIcon(implementation: Product) {
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

  function applicationIcon(implementation: Product) {
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

  function implementationTypeIcon(implementation: Product) {
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

  function isEditor(draft: Specification, person: Person) {
    // @ts-expect-error
    return draft.editor.find((p: Person) => p['@id'] === person['@id'])
  }

  function isAuthor(draft: Specification, person: Person) {
    // @ts-expect-error
    return draft.author.find((p: Person) => p['@id'] === person['@id'])
  }

  function isMaintainer(impl: Product, person: Person) {
    // @ts-expect-error
    return impl.maintainer.find((p: Person) => p['@id'] === person['@id'])
  }

  function isContributor(impl: Product, person: Person) {
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
    if (entity.type['@id'] === 'Specification' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Specification')) {
      name = 'draft'
    }
    if (entity.type['@id'] === 'Product' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'Product')) {
      name = 'implementation'
    }
    if (entity.type['@id'] === 'ClassOfProduct' || Array.isArray(entity.type) && entity.type.find((t: IRI) => t['@id'] === 'ClassOfProduct')) {
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
    show,
  }
}
