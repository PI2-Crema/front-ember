import DS from 'ember-data';

export default DS.Model.extend({
  error: DS.attr('number'),
  createdAt: DS.attr('date'),
  description: DS.attr(),
  sensor: DS.belongsTo('sensor')
});
