import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  scale: DS.attr(),
  isWorking: DS.attr('boolean', {defaultValue: true}),
  failRegistration: DS.attr('date'),
  feeder: DS.belongsTo('feeder'),
  sensorRecord: DS.hasMany('sensor-record'),
  sensorErrors: DS.hasMany('sensor-error')
});
