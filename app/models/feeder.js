import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  foodLevel: DS.attr('number', {defaultValue: 0}),
  batteryLevel: DS.attr('number', {defaultValue: 0}),
  tank: DS.belongsTo('tank', { inverse: null }),
  sensors: DS.hasMany('sensor'),
  networkCode: DS.attr('number'),
  needSetup: DS.attr('boolean', {defaultValue: true}),
  consumptions: DS.hasMany('consumption'),

  nivel: Ember.computed('foodLevel', function() {
    var foodLevel = this.get('foodLevel')

    if (foodLevel < 20) {
      return 'low'
    }

    if (foodLevel < 70) {
      return 'medium'
    }

    if (foodLevel <= 100) {
      return 'height'
    }
  })
});
