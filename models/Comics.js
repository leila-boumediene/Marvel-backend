const Comics =
  ("Comics",
  {
    _id: String,
    title: String,
    description: String,
    thumbnail: {
      result: {
        path: String,
      },
    },
  });
module.exports = Comics;
