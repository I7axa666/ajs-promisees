import { Promise } from 'core-js';
import json from '../parser';
import read from '../reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((jsonData) => resolve(JSON.parse(jsonData)))
        .catch((err) => reject(err));
    });
  }
}
