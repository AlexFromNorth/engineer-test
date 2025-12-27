import { IDb } from "../../db";
import { ENTITY_TYPES } from "../../types/entityTypes";

export const mockDb: IDb = {
  read: async () => ({
    record: {
      id: "1",
      data: {},
    },
  }),

  post: async () => ({ id: "1" }),

  put: async () => ({ id: "1" }),

  query: async ({ type }) => {
    if (type === ENTITY_TYPES.EMPLOYEE) {
      return {
        items: [
          {
            id: "1",
            data: {
              type: ENTITY_TYPES.EMPLOYEE,
              uuid: "1",
              firstName: "Ivan",
              lastName: "Ivanov",

              cityUuid: "c1",
              cityName: "Алматы",

              divisionUuid: "d1",
              divisionName: "IT",

              positionUuid: "p1",
              positionName: "Разработчик",
            },
          },
        ],
      };
    }

    return { items: [] };
  },
};
