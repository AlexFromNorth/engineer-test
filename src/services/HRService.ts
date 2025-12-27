import { EmployeeRepository } from "../repositories/EmployeeRepository";

export class HRService {
  constructor(private employeeRepo: EmployeeRepository) {}

  async employeeWithCityList() {
    const employees = await this.employeeRepo.getAll();

    return employees.map(e => ({
      firstName: e.firstName,
      city: e.cityName,
    }));
  }

  async employeeWithPositionList() {
    const employees = await this.employeeRepo.getAll();

    return employees.map(e => ({
      firstName: e.firstName,
      position: e.positionName,
      division: e.divisionName,
    }));
  }

  // сделал как заглушку
  async employeeUpdate() {

  }

}
