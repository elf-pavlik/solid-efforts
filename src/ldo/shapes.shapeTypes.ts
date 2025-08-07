import { ShapeType } from "@ldo/ldo";
import { shapesSchema } from "./shapes.schema";
import { shapesContext } from "./shapes.context";
import {
  SolidResource,
  CreativeWork,
  Organization,
  Person,
  Event,
  Service,
  Software,
  ClassOfProduct,
  Specification,
  Ontology,
} from "./shapes.typings";

/**
 * =============================================================================
 * LDO ShapeTypes shapes
 * =============================================================================
 */

/**
 * SolidResource ShapeType
 */
export const SolidResourceShapeType: ShapeType<SolidResource> = {
  schema: shapesSchema,
  shape:
    "https://solidproject.solidcommunity.net/catalog/shapes#SolidResourceShape",
  context: shapesContext,
};

/**
 * CreativeWork ShapeType
 */
export const CreativeWorkShapeType: ShapeType<CreativeWork> = {
  schema: shapesSchema,
  shape:
    "https://solidproject.solidcommunity.net/catalog/shapes#CreativeWorkShape",
  context: shapesContext,
};

/**
 * Organization ShapeType
 */
export const OrganizationShapeType: ShapeType<Organization> = {
  schema: shapesSchema,
  shape:
    "https://solidproject.solidcommunity.net/catalog/shapes#OrganizationShape",
  context: shapesContext,
};

/**
 * Person ShapeType
 */
export const PersonShapeType: ShapeType<Person> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#PersonShape",
  context: shapesContext,
};

/**
 * Event ShapeType
 */
export const EventShapeType: ShapeType<Event> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#EventShape",
  context: shapesContext,
};

/**
 * Service ShapeType
 */
export const ServiceShapeType: ShapeType<Service> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#ServiceShape",
  context: shapesContext,
};

/**
 * Software ShapeType
 */
export const SoftwareShapeType: ShapeType<Software> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#SoftwareShape",
  context: shapesContext,
};

/**
 * ClassOfProduct ShapeType
 */
export const ClassOfProductShapeType: ShapeType<ClassOfProduct> = {
  schema: shapesSchema,
  shape:
    "https://solidproject.solidcommunity.net/catalog/shapes#ClassOfProductShape",
  context: shapesContext,
};

/**
 * Specification ShapeType
 */
export const SpecificationShapeType: ShapeType<Specification> = {
  schema: shapesSchema,
  shape:
    "https://solidproject.solidcommunity.net/catalog/shapes#SpecificationShape",
  context: shapesContext,
};

/**
 * Ontology ShapeType
 */
export const OntologyShapeType: ShapeType<Ontology> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#OntologyShape",
  context: shapesContext,
};
