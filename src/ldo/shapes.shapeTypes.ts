import { ShapeType } from "@ldo/ldo";
import { shapesSchema } from "./shapes.schema";
import { shapesContext } from "./shapes.context";
import {
  SolidResource,
  CreativeWork,
  Event,
  Service,
  Software,
  Specification,
  ClassOfProduct,
  Ontology,
  Organization,
  Person,
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
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#SolidResource",
  context: shapesContext,
};

/**
 * CreativeWork ShapeType
 */
export const CreativeWorkShapeType: ShapeType<CreativeWork> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#CreativeWork",
  context: shapesContext,
};

/**
 * Event ShapeType
 */
export const EventShapeType: ShapeType<Event> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#Event",
  context: shapesContext,
};

/**
 * Service ShapeType
 */
export const ServiceShapeType: ShapeType<Service> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#Service",
  context: shapesContext,
};

/**
 * Software ShapeType
 */
export const SoftwareShapeType: ShapeType<Software> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#Software",
  context: shapesContext,
};

/**
 * Specification ShapeType
 */
export const SpecificationShapeType: ShapeType<Specification> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#Specification",
  context: shapesContext,
};

/**
 * ClassOfProduct ShapeType
 */
export const ClassOfProductShapeType: ShapeType<ClassOfProduct> = {
  schema: shapesSchema,
  shape:
    "https://solidproject.solidcommunity.net/catalog/shapes#ClassOfProduct",
  context: shapesContext,
};

/**
 * Ontology ShapeType
 */
export const OntologyShapeType: ShapeType<Ontology> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#Ontology",
  context: shapesContext,
};

/**
 * Organization ShapeType
 */
export const OrganizationShapeType: ShapeType<Organization> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#Organization",
  context: shapesContext,
};

/**
 * Person ShapeType
 */
export const PersonShapeType: ShapeType<Person> = {
  schema: shapesSchema,
  shape: "https://solidproject.solidcommunity.net/catalog/shapes#Person",
  context: shapesContext,
};
