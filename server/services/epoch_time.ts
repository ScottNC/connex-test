import { Epoch } from "../../shared/types";

export const epochTime = () => {
  const current = new Date();
  const epoch : number = Math.round(current.getTime() / 1000);
  const epochJSON : Epoch = { epoch };
  return epochJSON;
}