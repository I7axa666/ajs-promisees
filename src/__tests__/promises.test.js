import GameSavingLoader from '../forPromises/classForPromises';
import read from '../__mocks__/read';

jest.mock('../__mocks__/read');

const testData = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

test('should get user info', (done) => {
  GameSavingLoader.load().then((saving) => {
    expect((saving)).toEqual(testData);
    done();
  });
});

test('should get error', (done) => {
  read.mockImplementation(() => {
    throw new Error();
  });
  GameSavingLoader.load().then((saving) => {
    expect((saving)).toEqual(testData);
    done();
  });
});
