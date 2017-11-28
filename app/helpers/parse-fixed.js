import Ember from 'ember';

export function parseFixed(params/*, hash*/) {
  let number = params[0]
  return number.toFixed(2);
}

export default Ember.Helper.helper(parseFixed);
