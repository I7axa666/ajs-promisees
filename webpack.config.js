module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_models/,
        loader: 'babel-loader',
      },
    ],
  },
};
