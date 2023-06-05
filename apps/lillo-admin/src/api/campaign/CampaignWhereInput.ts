import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type CampaignWhereInput = {
  abtest?: JsonFilter;
  id?: StringFilter;
};
