import * as migration_20260304_200638 from "./20260304_200638";
import * as migration_20260306_083003 from "./20260306_083003";
import * as migration_20260306_135643 from "./20260306_135643";
import * as migration_20260306_140413 from "./20260306_140413";

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
  {
    up: migration_20260306_135643.up,
    down: migration_20260306_135643.down,
    name: "20260306_135643",
  },
  {
    up: migration_20260306_140413.up,
    down: migration_20260306_140413.down,
    name: "20260306_140413",
  },
];
