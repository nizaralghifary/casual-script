const awaitProcess = (msg) => {
  const format = /mastiin\s+(.+)/;
  const match = msg.match(format);
  
  if (!match) return null;

  const expression = match[1].trim();

  if (!expression) return null;

  return {
    exp: `await ${expression};`
  };
};

module.exports = awaitProcess;