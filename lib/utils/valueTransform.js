const booleanValue = (msg) => {
  if (msg.match(/bener$/)) {
    return "true";
  } else if (msg.match(/salah$/)) {
    return "false";
  }

  return null;
};

const valueTransform = (msg) => {
  let transforms = [booleanValue];

  for (const transform of transforms) {
    let res = transform(msg);
    if (res) {
      return res;
    }
  }

  return msg;
};

module.exports = valueTransform;