import { Types } from "mongoose";

export const arrayofIds = (arrayIds) => {
  const resultArrayIds = arrayIds.map((key) => new Types.ObjectId(key));
  return resultArrayIds;
};
