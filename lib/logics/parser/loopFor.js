const loopFor = (msg) => {
	let format = /cobain ([a-zA-Z0-9]+) sampe ([a-zA-Z0-9]+)/;
	let match = msg.match(format);
	if (!match) return null;

	return {
		exp: `for(let ${match[1]} = 0; ${match[1]} <= ${match[2]}; ${match[1]}++)`,
		openGroup: true,
	};
};

module.exports = loopFor;