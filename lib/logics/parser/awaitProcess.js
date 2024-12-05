const awaitProcess = (msg) => {
  let format = /mastiin/
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `await ${valueTransform(match[3])};`
  }
}
module.exports = awaitProcess;