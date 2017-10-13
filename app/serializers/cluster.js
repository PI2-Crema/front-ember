import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    currentTotal: {serialize: false},
    createdAt: {serialize: false},
    deathQuantity: {serialize: false},
    moneySpent: {serialize: false},
    foodWeightSpent: {serialize: false},
    transferInQuantity: {serialize: false},
    transferOutQuantity: {serialize: false},
    deathTax: {serialize: false},
    averageTca: {serialize: false},
    currentTca: {serialize: false}
  }
});
