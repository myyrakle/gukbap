const { isFunction } = require("./../lib/typecheck");

Function.isFunction = isFunction;
Function.curryingCall = null;
