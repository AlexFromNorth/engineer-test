import { IDb } from "../db";
import { createHRAppWithDb } from "../index.testable";
import { ENTITY_TYPES } from "../types/entityTypes";

describe("App edge cases", () => {
  it("returns empty arrays when no employees", async () => {
    const emptyDb: IDb = {
      read: async () => ({ record: { id: "", data: {} } }),
      post: async () => ({ id: "" }),
      put: async () => ({ id: "" }),
      query: async () => ({ items: [] }),
    };

    const app = createHRAppWithDb(emptyDb);

    expect(await app.employeeWithCityList()).toEqual([]);
    expect(await app.employeeWithPositionList()).toEqual([]);
  });

  it("ignores non-employee entities", async () => {
    const db: IDb = {
      read: async () => ({ record: { id: "", data: {} } }),
      post: async () => ({ id: "" }),
      put: async () => ({ id: "" }),
      query: async () => ({
        items: [
          {
            id: "1",
            data: {
              type: ENTITY_TYPES.CITY,
              uuid: "c1",
              name: "Алматы",
            },
          },
        ],
      }),
    };

    const app = createHRAppWithDb(db);
    const result = await app.employeeWithCityList();

    expect(result).toEqual([]);
  });
});
