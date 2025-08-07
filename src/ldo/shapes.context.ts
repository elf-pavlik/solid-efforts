import { LdoJsonldContext } from "@ldo/ldo";

/**
 * =============================================================================
 * shapesContext: JSONLD Context for shapes
 * =============================================================================
 */
export const shapesContext: LdoJsonldContext = {
  type: {
    "@id": "@type",
    "@isCollection": true,
  },
  CreativeWork: {
    "@id": "http://example.org#CreativeWork",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Event: {
    "@id": "http://example.org#Event",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Software: {
    "@id": "http://example.org#Software",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Service: {
    "@id": "http://example.org#Service",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Person: {
    "@id": "http://example.org#Person",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Organization: {
    "@id": "http://example.org#Organization",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  Specification: {
    "@id": "http://example.org#Specification",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
      name: {
        "@id": "http://example.org#name",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      description: {
        "@id": "http://example.org#description",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      repository: {
        "@id": "http://example.org#repository",
        "@type": "@id",
      },
      landingPage: {
        "@id": "http://example.org#landingPage",
        "@type": "@id",
      },
      editor: {
        "@id": "http://example.org#editor",
        "@type": "@id",
        "@isCollection": true,
      },
      author: {
        "@id": "http://example.org#author",
        "@type": "@id",
        "@isCollection": true,
      },
      definesConformanceFor: {
        "@id": "http://example.org#definesConformanceFor",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  Ontology: {
    "@id": "http://example.org#Ontology",
    "@context": {
      type: {
        "@id": "@type",
        "@isCollection": true,
      },
    },
  },
  name: {
    "@id": "http://example.org#name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  subType: {
    "@id": "http://example.org#subType",
    "@isCollection": true,
  },
  AboutSolid:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#AboutSolid",
  AboutSolidApps:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#AboutSolidApps",
  ResearchPaper:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#ResearchPaper",
  OtherLearningResource:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherLearningResource",
  OtherTechResource:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherTechResource",
  Primer: "https://solidproject.solidcommunity.net/catalog/taxonomy#Primer",
  about: {
    "@id": "http://example.org#about",
    "@type": "@id",
    "@isCollection": true,
  },
  technicalKeyword: {
    "@id": "http://example.org#technicalKeyword",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  landingPage: {
    "@id": "http://example.org#landingPage",
    "@type": "@id",
  },
  provider: {
    "@id": "http://example.org#provider",
    "@type": "@id",
    "@isCollection": true,
  },
  author: {
    "@id": "http://example.org#author",
    "@type": "@id",
    "@isCollection": true,
  },
  editor: {
    "@id": "http://example.org#editor",
    "@type": "@id",
    "@isCollection": true,
  },
  description: {
    "@id": "http://example.org#description",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  schedule: {
    "@id": "http://example.org#schedule",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  videoCallPage: {
    "@id": "http://example.org#videoCallPage",
    "@type": "@id",
  },
  GeneralPurposePodService:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#GeneralPurposePodService",
  SpecializedPodService:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#SpecializedPodService",
  CommunicationService:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#CommunicationService",
  OtherService:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherService",
  status: {
    "@id": "http://example.org#status",
    "@isCollection": true,
  },
  Exploration:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#Exploration",
  Development:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#Development",
  Production:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#Production",
  Archived: "https://solidproject.solidcommunity.net/catalog/taxonomy#Archived",
  contactEmail: {
    "@id": "http://example.org#contactEmail",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  logo: {
    "@id": "http://example.org#logo",
    "@type": "@id",
  },
  serviceEndpoint: {
    "@id": "http://example.org#serviceEndpoint",
    "@type": "@id",
  },
  softwareStackIncludes: {
    "@id": "http://example.org#softwareStackIncludes",
    "@type": "@id",
    "@isCollection": true,
  },
  socialKeyword: {
    "@id": "http://example.org#socialKeyword",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  serviceAudience: {
    "@id": "http://example.org#serviceAudience",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ProductivityApp:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#ProductivityApp",
  LeisureApp:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#LeisureApp",
  PodApp: "https://solidproject.solidcommunity.net/catalog/taxonomy#PodApp",
  OtherApp: "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherApp",
  PodServer:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#PodServer",
  ServerPlugin:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#ServerPlugin",
  SoftwareLibrary:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#SoftwareLibrary",
  clientID: {
    "@id": "http://example.org#clientID",
    "@type": "@id",
  },
  repository: {
    "@id": "http://example.org#repository",
    "@type": "@id",
  },
  showcase: {
    "@id": "http://example.org#showcase",
    "@type": "@id",
  },
  maintainer: {
    "@id": "http://example.org#maintainer",
    "@type": "@id",
    "@isCollection": true,
  },
  developer: {
    "@id": "http://example.org#developer",
    "@type": "@id",
    "@isCollection": true,
  },
  conformsTo: {
    "@id": "http://example.org#conformsTo",
    "@type": "@id",
    "@isCollection": true,
  },
  hasDependencyOn: {
    "@id": "http://example.org#hasDependencyOn",
    "@type": "@id",
    "@isCollection": true,
  },
  definesConformanceFor: {
    "@id": "http://example.org#definesConformanceFor",
    "@type": "@id",
    "@isCollection": true,
  },
  namespaceURI: {
    "@id": "http://example.org#namespaceURI",
    "@type": "@id",
  },
  prefix: {
    "@id": "http://example.org#prefix",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  Company: "https://solidproject.solidcommunity.net/catalog/taxonomy#Company",
  GovernmentalOrganization:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#GovernmentalOrganization",
  UniversityProject:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#UniversityProject",
  OpenSourceProject:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#OpenSourceProject",
  FundingOrganization:
    "https://solidproject.solidcommunity.net/catalog/taxonomy#FundingOrganization",
  OtherNGO: "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherNGO",
  webid: {
    "@id": "http://example.org#webid",
    "@type": "@id",
  },
  resourcesWanted: {
    "@id": "http://example.org#resourcesWanted",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  resourcesOffered: {
    "@id": "http://example.org#resourcesOffered",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@isCollection": true,
  },
  forumHandle: {
    "@id": "http://example.org#forumHandle",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  matrixHandle: {
    "@id": "http://example.org#matrixHandle",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
};
