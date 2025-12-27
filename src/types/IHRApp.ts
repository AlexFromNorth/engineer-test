import { EntityType } from "../types/entityTypes";

export interface EmployeeWithCityDto {
  firstName: string;
  city: string;
}

export interface EmployeeWithPositionDto {
  firstName: string;
  position: string;
  division: string;
}

export interface UpdateArgs<T = object> {
  entity: EntityType;
  data: T;
}

export interface IHRApp {
  employeeWithCityList(): Promise<EmployeeWithCityDto[]>;
  employeeWithPositionList(): Promise<EmployeeWithPositionDto[]>;
  update(args: UpdateArgs): Promise<void>;
}
