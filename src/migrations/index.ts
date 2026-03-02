import * as migration_20260302_170117 from './20260302_170117';

export const migrations = [
  {
    up: migration_20260302_170117.up,
    down: migration_20260302_170117.down,
    name: '20260302_170117'
  },
];
