import DS from 'ember-data';

export default DS.Model.extend({
  hour: DS.attr('number'),
  minute: DS.attr('number'),
  quantity: DS.attr('number'),
  feeder: DS.belongsTo('feeder')
});
