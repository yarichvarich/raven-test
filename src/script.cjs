const data = require('./data.json');

const script = () => {
  const sorted = data.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  console.log(
    JSON.stringify(
      sorted.map((val, id) => ({ id, ...val })),
      null,
      4
    )
  );
};

script();
