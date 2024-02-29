import GameSavingLoader from './gameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    const obj = JSON.parse(saving);
    Object.getPrototypeOf(obj);
  } catch (error) {
    throw new Error(error);
  }
})();
