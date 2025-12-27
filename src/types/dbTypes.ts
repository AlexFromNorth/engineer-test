import { ENTITY_TYPES } from "./entityTypes";

export interface EmployeeData {
  type: typeof ENTITY_TYPES.EMPLOYEE;
  uuid: string;
  firstName: string;
  lastName: string;

  cityUuid: string;
  cityName: string;

  divisionUuid: string;
  divisionName: string;

  positionUuid: string;
  positionName: string;
}

// ниже типизация вводных данных. Сейчас не нужны, но в дальнейшщем в разработки понадобятся

export interface CityData {
  type: typeof ENTITY_TYPES.CITY;
  uuid: string;
  name: string;
}

export interface DivisionData {
  type: typeof ENTITY_TYPES.DIVISION;
  uuid: string;
  name: string;
  cityUuid: string;
}

export interface PositionData {
  type: typeof ENTITY_TYPES.POSITION;
  uuid: string;
  name: string;
}
