import { IDb } from "../db";
import { ENTITY_TYPES } from "../types/entityTypes";
import { EmployeeData } from "../types/dbTypes";

export class EmployeeRepository {
  constructor(private db: IDb) {}

  async getAll(): Promise<EmployeeData[]> {
    const res = await this.db.query({
      type: ENTITY_TYPES.EMPLOYEE,
      where: {},
    });

    return res.items.map((i) => i.data as EmployeeData).filter((e) => e.type === ENTITY_TYPES.EMPLOYEE);
  }
}
