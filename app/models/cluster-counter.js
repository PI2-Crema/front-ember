import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  cluster: DS.belongsTo('cluster'),
  clusterCounterType: DS.belongsTo('clusterCounterType')
});
