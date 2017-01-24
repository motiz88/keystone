module.exports = function getQueryHook (name) {
	return this.hasQueryHook(name) && this.queryHooks[name];
};
