import { IDb } from "./db";
import { IHRApp } from "./types/IHRApp";
import { HRService } from "./services/HRService";
import { EmployeeRepository } from "./repositories/EmployeeRepository";

// обертка для тестов
export const createHRAppWithDb = (db: IDb): IHRApp => {
  const service = new HRService(
    new EmployeeRepository(db)
  );

  return {
    employeeWithCityList: () => service.employeeWithCityList(),
    employeeWithPositionList: () => service.employeeWithPositionList(),
    update: async () => {},
  };
};
