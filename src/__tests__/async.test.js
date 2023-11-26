import GameSavingLoader from '../forAsyncAwait/classForAsync';

const testData = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  },
};

test('should get user info', (done) => {
  GameSavingLoader.load().then((saving) => {
    expect((saving)).toEqual(testData);
    done();
  });
});
