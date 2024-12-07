const loopFor = (msg) => {
  let explicitFormat = /cobain ([a-zA-Z]+) dari (-?\d+) sampe (-?\d+)/;
  let explicitMatch = msg.match(explicitFormat);

  if (explicitMatch) {
    const variableName = explicitMatch[1];
    const startValue = parseInt(explicitMatch[2], 10);
    const endValue = parseInt(explicitMatch[3], 10);

    if (!isNaN(startValue) && !isNaN(endValue)) {
      const comparison = startValue <= endValue ? '<=' : '>=';
      const incrementOperator = startValue <= endValue ? '++' : '--';

      return {
        exp: `for(let ${variableName} = ${startValue}; ${variableName} ${comparison} ${endValue}; ${variableName}${incrementOperator})`,
        openGroup: true,
      };
    }
  }

  let simplifiedFormat = /cobain\s+([a-zA-Z]+)\s+sampe\s+([a-zA-Z0-9]+)/;
  let simplifiedMatch = msg.match(simplifiedFormat);

  if (simplifiedMatch) {
    const variableName = simplifiedMatch[1];
    const endValue = simplifiedMatch[2];

    return {
      exp: `for(let ${variableName} = 0; ${variableName} < ${endValue}; ${variableName}++)`,
      openGroup: true,
    };
  }

  let iterationFormat = /cobain\s+([a-zA-Z]+)\s+dari\s+([a-zA-Z0-9]+)/;
  let iterationMatch = msg.match(iterationFormat);

  if (iterationMatch) {
    const variableName = iterationMatch[1];
    const iterableVariable = iterationMatch[2];

    return {
      exp: `for(let ${variableName} of ${iterableVariable})`,
      openGroup: true,
    };
  }

  return null;
};

module.exports = loopFor;