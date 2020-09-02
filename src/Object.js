function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const result = Array.isArray(obj) ? [] : {};

  for (let key of Object.keys(obj)) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}

function copy(aObject) {
  if (!aObject) {
    return aObject;
  }

  let v;
  let bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    v = aObject[k];
    bObject[k] = typeof v === "object" ? copy(v) : v;
  }

  return bObject;
}

Object.prototype.clone = function () {
  return deepClone(this);
};
