module.exports = function hasQueryHook (name) {
	return this.queryHooks && typeof this.queryHooks[name] === 'function';
};
