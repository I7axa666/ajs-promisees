import json from '../parser';
import read from '../__mocks__/read';
import GameSaving from '../gameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((jsonData) => new GameSaving(JSON.parse(jsonData)))
      .catch((err) => err);
  }
}
