import config from "@payload-config";
import { getPayload as getPayloadClient } from "payload";

export const getPayload = () =>
  getPayloadClient({
    config,
  });
