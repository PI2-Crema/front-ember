import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  feeder: DS.belongsTo('feeder'),
  clusters: DS.hasMany('cluster'),
  currentTypeName: DS.attr(),
  numberOfFish: DS.attr('number'),
  currentTca: DS.attr('number'),
  averageTca: DS.attr('number'),
  numberOfDays: DS.attr('number')
});
