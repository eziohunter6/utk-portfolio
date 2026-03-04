import * as migration_20260304_104503 from './20260304_104503';

export const migrations = [
  {
    up: migration_20260304_104503.up,
    down: migration_20260304_104503.down,
    name: '20260304_104503'
  },
];
