import _ from 'lodash';

/**
 * @param {Object} prop The password to compare against
 * @return {Object} return property
 */
function get(prop) {
  if (this.hasOwnProperty(prop)) return this[prop];
  else throw new Error(`There's no property defined as ${prop} in your translations`);
}

const lang = {
  get,
};

let obj = require(`./en.js`).default;
_.each(Object.getOwnPropertyNames(obj), (property) => {
  const prop = property;
  lang[prop] = Object.assign({}, obj[prop], { get });
});

export default lang;
