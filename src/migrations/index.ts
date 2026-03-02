import * as migration_20260302_185219 from './20260302_185219';

export const migrations = [
  {
    up: migration_20260302_185219.up,
    down: migration_20260302_185219.down,
    name: '20260302_185219'
  },
];
