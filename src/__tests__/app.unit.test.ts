import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { HRService } from "../services/HRService";
import { mockDb } from "./mock/mockDb";

describe("HRService (read-heavy, denormalized)", () => {
  const repo = new EmployeeRepository(mockDb);
  const service = new HRService(repo);

  it("returns employee with city name without joins", async () => {
    const result = await service.employeeWithCityList();

    expect(result).toEqual([{ firstName: "Ivan", city: "Алматы" }]);
  });

  it("returns employee with position and division without joins", async () => {
    const result = await service.employeeWithPositionList();

    expect(result).toEqual([
      {
        firstName: "Ivan",
        position: "Разработчик",
        division: "IT",
      },
    ]);
  });
});
