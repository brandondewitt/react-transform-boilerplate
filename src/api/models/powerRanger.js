import { PowerRangers } from '../data';
let powerRangers = [...PowerRangers];

export const find = () => {
  return new Promise(resolve => {
    resolve(powerRangers);
    return powerRangers;
  });
};

export const findById = (id) => {
  return new Promise((resolve, reject) => {
    const powerRanger = powerRangers.find(powerRanger => powerRanger.id === Number(id));
    if (powerRanger) {
      return resolve(powerRanger);
    } else {
      return reject('Could not find ranger');
    }
  });
};

export const create = (powerRanger) => {
  const id = powerRangers[powerRangers.length - 1].id + 1;
  powerRangers = [...powerRangers, Object.assign({}, powerRanger, { id })];
  return new Promise(resolve => powerRangers[powerRangers.length - 1]);
};

export const update = (updatedPowerRanger) => {
  const powerRangerIndex = powerRangers.findIndex(powerRanger => powerRanger.id === updatedPowerRanger.id);
  return new Promise((resolve, reject) => {
    if (powerRangerIndex >= 0) {
      const _powerRanger = Object.assign({}, powerRangers[powerRangerIndex], updatedPowerRanger);
      powerRangers = [
        ...powerRangers.slice(0, powerRangerIndex),
        _powerRanger,
        ...powerRangers.slice(powerRangerIndex + 1)
      ];
      return resolve(_powerRanger);
    } else {
      return reject('Could not find ranger');
    }
  });
};

export const destroy = (id) => {
  const powerRangerIndex = powerRangers.findIndex(powerRanger => powerRanger.id === Number(id));
  return new Promise((resolve, reject) => {
    if (powerRangerIndex >= 0) {
      powerRangers = [
        ...powerRangers.slice(0, powerRangerIndex),
        ...powerRangers.slice(powerRangerIndex + 1)
      ];
      return resolve();
    } else {
      return reject('Could not find ranger');
    }
  });
};
