import * as migration_20260306_154816 from "./20260306_154816";
import * as migration_20260309_180140 from "./20260309_180140";
import * as migration_20260309_190112 from "./20260309_190112";

export const migrations = [
  {
    up: migration_20260306_154816.up,
    down: migration_20260306_154816.down,
    name: "20260306_154816",
  },
  {
    up: migration_20260309_180140.up,
    down: migration_20260309_180140.down,
    name: "20260309_180140",
  },
  {
    up: migration_20260309_190112.up,
    down: migration_20260309_190112.down,
    name: "20260309_190112",
  },
];
