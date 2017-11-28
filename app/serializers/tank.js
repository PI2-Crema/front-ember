import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    currentTypeName: {serialize: false},
    numberOfFish: {serialize: false},
    currentTca: {serialize: false},
    averageTca: {serialize: false},
    numberOfDays: {serialize: false}
  }
});
