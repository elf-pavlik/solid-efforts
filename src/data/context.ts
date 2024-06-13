export const context = {
  id: '@id',
  type: '@type',
  xsd: 'http://www.w3.org/2001/XMLSchema#',
  schema: 'http://schema.org/',
  wikidata: 'http://www.wikidata.org/entity/',
  ex: 'https://vocab.example/',
  data: 'https://data.example/',
  name: {
    '@id': 'schema:name',
    '@type': 'xsd:string'
  },
  image: {
    '@id': 'schema:image',
    '@type': '@id'
  },
  Person: 'schema:Person',
  Draft: 'ex:Draft',
  Primer: 'ex:Primer',
  Specification: 'ex:Specification',
  Implementation: 'ex:Implementation',
  Application: 'ex:Application',
  ProductClass: 'ex:ProductClass',
  Scope: 'ex:Scope',
  Module: 'ex:Module',
  Service: 'ex:Service',
  editor: {
    '@id': 'schema:editor',
    '@type': '@id'
  },
  author: {
    '@id': 'schema:author',
    '@type': '@id'
  },
  maintainer: {
    '@id': 'ex:maintainer',
    '@type': '@id'
  },
  contributor: {
    '@id': 'ex:contributor',
    '@type': '@id'
  },
  specifies: {
    '@id': 'ex:specifies',
    '@type': '@id'
  },
  explains: {
    '@id': 'ex:explains',
    '@type': '@id'
  },
  implements: {
    '@id': 'ex:implements',
    '@type': '@id'
  },
  accesses: {
    '@id': 'ex:accesses',
    '@type': '@id'
  },
  dependency: {
    '@id': 'ex:dependency',
    '@type': '@id'
  },
  programmingLanguage: {
    '@id': 'ex:programmingLanguage',
    '@type': '@id'
  },
  framework: {
    '@id': 'ex:framework',
    '@type': '@id'
  },
}
