import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  feeder: DS.belongsTo('feeder'),
  clusters: DS.hasMany('cluster')
});
