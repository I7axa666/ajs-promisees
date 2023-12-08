import GameSavingLoader from '../forPromises/classForPromises';
import read from '../__mocks__/read';
import GameSaving from '../gameSaving';

jest.setTimeout(60000);
jest.mock('../__mocks__/read');

beforeEach(() => {
  jest.resetAllMocks();
});

const testData = new GameSaving({
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  },
});

test('should get user info', (done) => {
  read.mockReturnValue(new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  }));
  GameSavingLoader.load().then((saving) => {
    expect((saving)).toEqual(testData);
    done();
  });
});

test('should get error', (done) => {
  // read.mockReturnValue(new Error());

  expect(() => {
    read.mockReturnValue(new Error());
    GameSavingLoader.load();
  }).toBeInstanceOf(Error);
  done();

  // GameSavingLoader.load().then((saving) => {
  //   expect((saving)).reject.toBeInstanceOf(Error);
  //   done();
  // });
});
