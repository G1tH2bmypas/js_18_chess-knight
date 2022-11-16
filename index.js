function knight(x1, y1, x2, y2) {
	return Math.abs(x2 - x1) === 2 && Math.abs(y2 - y1) === 1 || Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 2;
}

module.exports = knight;
