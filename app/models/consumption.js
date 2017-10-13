import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  lot: DS.belongsTo('lot'),
  feeder: DS.belongsTo('feeder'),
  createdAt: DS.attr('date'),
  doseValue: DS.attr('number')
});
