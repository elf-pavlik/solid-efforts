import { Schema } from "shexj";

/**
 * =============================================================================
 * shapesSchema: ShexJ Schema for shapes
 * =============================================================================
 */
export const shapesSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#SolidResource",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
          valueExpr: {
            type: "NodeConstraint",
            values: [
              "http://example.org#CreativeWork",
              "http://example.org#Event",
              "http://example.org#Software",
              "http://example.org#Service",
              "http://example.org#Person",
              "http://example.org#Organization",
              "http://example.org#Specification",
              "http://example.org#Ontology",
            ],
          },
          min: 0,
          max: -1,
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#CreativeWork",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#subType",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#AboutSolid",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#AboutSolidApps",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#ResearchPaper",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherLearningResource",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherTechResource",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Primer",
                ],
              },
              min: 1,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#about",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#technicalKeyword",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#provider",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#author",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#editor",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#Event",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#provider",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#schedule",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#videoCallPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#Service",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#subType",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#GeneralPurposePodService",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#SpecializedPodService",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#CommunicationService",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherService",
                ],
              },
              min: 1,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#status",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Exploration",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Development",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Production",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Archived",
                ],
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#contactEmail",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#logo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#serviceEndpoint",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#softwareStackIncludes",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#provider",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#socialKeyword",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#serviceAudience",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#Software",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#subType",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#ProductivityApp",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#LeisureApp",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#PodApp",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherApp",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#PodServer",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#ServerPlugin",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#SoftwareLibrary",
                ],
              },
              min: 1,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#status",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Exploration",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Development",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Production",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Archived",
                ],
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#contactEmail",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#clientID",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#logo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#repository",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#showcase",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#provider",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#maintainer",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#developer",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#socialKeyword",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#technicalKeyword",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#conformsTo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#hasDependencyOn",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#Specification",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://example.org#Specification"],
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#repository",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#editor",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#author",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#definesConformanceFor",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#ClassOfProduct",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://example.org#name",
          valueExpr: {
            type: "NodeConstraint",
            datatype: "http://www.w3.org/2001/XMLSchema#string",
          },
          min: 1,
          max: 1,
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#Ontology",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#namespaceURI",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#prefix",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#repository",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#Organization",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#subType",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#Company",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#GovernmentalOrganization",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#UniversityProject",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#OpenSourceProject",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#FundingOrganization",
                  "https://solidproject.solidcommunity.net/catalog/taxonomy#OtherNGO",
                ],
              },
              min: 1,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#contactEmail",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#logo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#webid",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#socialKeyword",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#resourcesWanted",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#resourcesOffered",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "https://solidproject.solidcommunity.net/catalog/shapes#Person",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://example.org#name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 1,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#contactEmail",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#webid",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#forumHandle",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#matrixHandle",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#logo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#landingPage",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#resourcesWanted",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://example.org#resourcesOffered",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
  ],
};
