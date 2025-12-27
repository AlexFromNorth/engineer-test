import { IDb, IDb_Query_Response } from "../db";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { EmployeeData } from "../types/dbTypes";
import { ENTITY_TYPES } from "../types/entityTypes";


describe("EmployeeRepository", () => {
  const mockEmployees: EmployeeData[] = [
    {
      type: ENTITY_TYPES.EMPLOYEE,
      uuid: "1",
      firstName: "Ivan",
      lastName: "Ivanov",
      divisionUuid: "div1",
      cityUuid: "city1",
      positionUuid: "pos1",
      cityName: "Алматы",
      positionName: "Разработчик",
      divisionName: "IT",
    },
  ];

  const mockDb: IDb = {
    read: async () => ({ record: { id: "", data: {} } }),
    post: async () => ({ id: "" }),
    put: async () => ({ id: "" }),
    query: async () => ({
      items: mockEmployees.map((emp) => ({ id: emp.uuid, data: emp })),
    } as IDb_Query_Response),
  };

  it("getAll возвращает список сотрудников в правильном формате", async () => {
    const repo = new EmployeeRepository(mockDb);
    const result = await repo.getAll();

    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Ivan");
    expect(result[0].cityName).toBe("Алматы");
  });
});
