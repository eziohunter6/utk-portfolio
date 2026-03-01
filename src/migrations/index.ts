import * as migration_20260301_181845 from './20260301_181845';

export const migrations = [
  {
    up: migration_20260301_181845.up,
    down: migration_20260301_181845.down,
    name: '20260301_181845'
  },
];
