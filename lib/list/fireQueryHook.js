module.exports = function fireQueryHook (name, ...args) {
	if (this.hasQueryHook(name)) {
		return this.getQueryHook(name).call(this, ...args);
	}
};
