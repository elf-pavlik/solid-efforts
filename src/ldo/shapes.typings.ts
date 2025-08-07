import { LdoJsonldContext, LdSet } from "@ldo/ldo";

/**
 * =============================================================================
 * Typescript Typings for shapes
 * =============================================================================
 */

/**
 * SolidResource Type
 */
export interface SolidResource {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type?: LdSet<
    | {
        "@id": "CreativeWork";
      }
    | {
        "@id": "Event";
      }
    | {
        "@id": "Software";
      }
    | {
        "@id": "Service";
      }
    | {
        "@id": "Person";
      }
    | {
        "@id": "Organization";
      }
    | {
        "@id": "Specification";
      }
    | {
        "@id": "Ontology";
      }
  >;
}

/**
 * CreativeWork Type
 */
export interface CreativeWork {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
  subType: LdSet<
    | {
        "@id": "AboutSolid";
      }
    | {
        "@id": "AboutSolidApps";
      }
    | {
        "@id": "ResearchPaper";
      }
    | {
        "@id": "OtherLearningResource";
      }
    | {
        "@id": "OtherTechResource";
      }
    | {
        "@id": "Primer";
      }
  >;
  about?: LdSet<{
    "@id": string;
  }>;
  technicalKeyword?: LdSet<string>;
  landingPage?: {
    "@id": string;
  };
  provider?: LdSet<{
    "@id": string;
  }>;
  author?: LdSet<{
    "@id": string;
  }>;
  editor?: LdSet<{
    "@id": string;
  }>;
  description?: string;
}

/**
 * Event Type
 */
export interface Event {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
  description?: string;
  provider?: LdSet<{
    "@id": string;
  }>;
  schedule?: string;
  videoCallPage?: {
    "@id": string;
  };
  landingPage?: {
    "@id": string;
  };
}

/**
 * Service Type
 */
export interface Service {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
  subType: LdSet<
    | {
        "@id": "GeneralPurposePodService";
      }
    | {
        "@id": "SpecializedPodService";
      }
    | {
        "@id": "CommunicationService";
      }
    | {
        "@id": "OtherService";
      }
  >;
  status:
    | {
        "@id": "Exploration";
      }
    | {
        "@id": "Development";
      }
    | {
        "@id": "Production";
      }
    | {
        "@id": "Archived";
      };
  description?: string;
  contactEmail?: string;
  logo?: {
    "@id": string;
  };
  serviceEndpoint?: {
    "@id": string;
  };
  landingPage?: {
    "@id": string;
  };
  softwareStackIncludes?: LdSet<{
    "@id": string;
  }>;
  provider?: LdSet<{
    "@id": string;
  }>;
  socialKeyword?: LdSet<string>;
  serviceAudience?: string;
}

/**
 * Software Type
 */
export interface Software {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
  subType: LdSet<
    | {
        "@id": "ProductivityApp";
      }
    | {
        "@id": "LeisureApp";
      }
    | {
        "@id": "PodApp";
      }
    | {
        "@id": "OtherApp";
      }
    | {
        "@id": "PodServer";
      }
    | {
        "@id": "ServerPlugin";
      }
    | {
        "@id": "SoftwareLibrary";
      }
  >;
  status:
    | {
        "@id": "Exploration";
      }
    | {
        "@id": "Development";
      }
    | {
        "@id": "Production";
      }
    | {
        "@id": "Archived";
      };
  contactEmail?: string;
  description?: string;
  clientID?: {
    "@id": string;
  };
  logo?: {
    "@id": string;
  };
  landingPage?: {
    "@id": string;
  };
  repository?: {
    "@id": string;
  };
  showcase?: {
    "@id": string;
  };
  provider?: LdSet<{
    "@id": string;
  }>;
  maintainer?: LdSet<{
    "@id": string;
  }>;
  developer?: LdSet<{
    "@id": string;
  }>;
  socialKeyword?: LdSet<string>;
  technicalKeyword?: LdSet<string>;
  conformsTo?: LdSet<{
    "@id": string;
  }>;
  hasDependencyOn?: LdSet<{
    "@id": string;
  }>;
}

/**
 * Specification Type
 */
export interface Specification {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  type: LdSet<{
    "@id": "Specification";
  }>;
  name: string;
  description?: string;
  repository?: {
    "@id": string;
  };
  landingPage?: {
    "@id": string;
  };
  editor?: LdSet<{
    "@id": string;
  }>;
  author?: LdSet<{
    "@id": string;
  }>;
  definesConformanceFor?: LdSet<{
    "@id": string;
  }>;
}

/**
 * ClassOfProduct Type
 */
export interface ClassOfProduct {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
}

/**
 * Ontology Type
 */
export interface Ontology {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
  description?: string;
  namespaceURI?: {
    "@id": string;
  };
  prefix?: string;
  repository?: {
    "@id": string;
  };
  landingPage?: {
    "@id": string;
  };
}

/**
 * Organization Type
 */
export interface Organization {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
  subType: LdSet<
    | {
        "@id": "Company";
      }
    | {
        "@id": "GovernmentalOrganization";
      }
    | {
        "@id": "UniversityProject";
      }
    | {
        "@id": "OpenSourceProject";
      }
    | {
        "@id": "FundingOrganization";
      }
    | {
        "@id": "OtherNGO";
      }
  >;
  contactEmail?: string;
  description?: string;
  logo?: {
    "@id": string;
  };
  webid?: {
    "@id": string;
  };
  landingPage?: {
    "@id": string;
  };
  socialKeyword?: LdSet<string>;
  resourcesWanted?: LdSet<string>;
  resourcesOffered?: LdSet<string>;
}

/**
 * Person Type
 */
export interface Person {
  "@id"?: string;
  "@context"?: LdoJsonldContext;
  name: string;
  contactEmail?: string;
  webid?: {
    "@id": string;
  };
  forumHandle?: string;
  matrixHandle?: string;
  description?: string;
  logo?: {
    "@id": string;
  };
  landingPage?: {
    "@id": string;
  };
  resourcesWanted?: LdSet<string>;
  resourcesOffered?: LdSet<string>;
}
