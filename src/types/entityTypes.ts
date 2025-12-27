export const ENTITY_TYPES = {
  CITY: "city",
  DIVISION: "division",
  POSITION: "position",
  EMPLOYEE: "employee",
} as const;

export type EntityType = typeof ENTITY_TYPES[keyof typeof ENTITY_TYPES];
