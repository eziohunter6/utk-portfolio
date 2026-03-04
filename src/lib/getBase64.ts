"use server";

import { Buffer } from "node:buffer";
import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (
  src: string | null | undefined,
): Promise<string | null> => {
  if (!src) {
    return null;
  }

  try {
    const response = await fetch(`${process.env.BASE_URL}${src}`);
    if (!response.ok) {
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));
    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (error) {
    console.error("[getBase64] Error fetching base64 ->", { src, error });
    return null;
  }
};
