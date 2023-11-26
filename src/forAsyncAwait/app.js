import GameSavingLoader from './classForAsync';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (err) {
    return err;
  }
})();
