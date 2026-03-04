import * as migration_20260304_200638 from "./20260304_200638";

export const migrations = [
  {
    up: migration_20260304_200638.up,
    down: migration_20260304_200638.down,
    name: "20260304_200638",
  },
];
