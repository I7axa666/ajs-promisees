import GameSavingLoader from './classForPromises';

GameSavingLoader.load().then((saving) => saving, (error) => console.log(error));
