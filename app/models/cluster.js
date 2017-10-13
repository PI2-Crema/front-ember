import DS from 'ember-data';

export default DS.Model.extend({
  total: DS.attr('number'),
  isDone: DS.attr('boolean', {defaultValue: false}),
  currentTotal: DS.attr('number'),
  tank: DS.belongsTo('tank'),
  fishType: DS.belongsTo('fish-type'),
  endDate: DS.attr('date'),
  createdAt: DS.attr('date'),
  initialWeight: DS.attr('number'),
  deathQuantity: DS.attr('number'),
  moneySpent: DS.attr('number'),
  foodWeightSpent: DS.attr('number'),
  transferInQuantity: DS.attr('number'),
  transferOutQuantity: DS.attr('number'),
  deathTax: DS.attr('number'),
  averageTca: DS.attr('number'),
  currentTca: DS.attr('number'),

  period: Ember.computed('isDone', 'endDate', function() {
    var initMoment = moment(this.get('createdAt'));
    var endMoment = this.get('isDone') ? moment(this.get('endDate')) : moment();

    var period = endMoment.diff(initMoment, 'days');

    if (isNaN(period)) {
      return `0 dias`
    } else {
      return `${period} dias`
    }
  })
});
