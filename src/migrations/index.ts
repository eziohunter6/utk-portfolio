import * as migration_20260304_200638 from "./20260304_200638";
import * as migration_20260306_083003 from "./20260306_083003";

export const migrations = [
  {
    up: migration_20260304_200638.up,
    down: migration_20260304_200638.down,
    name: "20260304_200638",
  },
  {
    up: migration_20260306_083003.up,
    down: migration_20260306_083003.down,
    name: "20260306_083003",
  },
];
