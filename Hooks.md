# Hooks

## List query hooks

These are fired in the course of handling API requests. Set them before registering your list type as follows:

```js

const MyList = new keystone.List('MyList', {
	/* ... */
});

/* ... */

MyList.queryHooks = {
	'item.get itemReceivedAsync' ({ item }, done) {
		item.myCustomProperty = 1234;
		done();
	}
};

MyList.register();
```

List hooks are always executed with `this` referring to the current Keystone list.


### `'item.get itemReceivedAsync' (args, done)`

Parameters:

* args: `{ item: Object }`
* done: `( err: ?Error ) => void`

Fired by the `item.get` route handler when a call to `query.exec` has found an item and has not produced an error. If this hook is set, it will block further processing until `done` is called.

### `'list.get itemsReceivedAsync' (args, done)`

Parameters:

* args: `{ items: Array<Object> }`
* done: `( err: ?Error ) => void`

Fired by the `list.get` route handler when a call to `query.exec` has found items and has not produced an error. If this hook is set, it will block further processing until `done` is called.

### `'counts getCriteria' (args)`
Parameters:

* args: `{ req: Express.Request }`

Return value: `?Object` - Mongoose filter criteria or `undefined`

Fired by the `counts` route handler. Any criteria returned is added to the Mongoose query being constructed.

### `'list.get getCriteria' (args)`
Parameters:

* args: `{ req: Express.Request }`

Return value: `?Object` - Mongoose filter criteria or `undefined`

Fired by the `list.get` route handler. Any criteria returned is added to the Mongoose query being constructed.
