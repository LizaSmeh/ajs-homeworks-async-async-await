import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const response = await json(data);
    return response;
  }
}
