import { JsonValue } from "type-fest";

export type Campaign = {
  abtest: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
