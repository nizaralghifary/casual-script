const tryFn = (msg) => {
  let format = /coba/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `try`,
    openGroup: true,
  };
};

module.exports = tryFn;