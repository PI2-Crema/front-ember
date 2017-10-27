import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  food_level: DS.attr('number', {defaultValue: 0}),
  batery_level: DS.attr('number', {defaultValue: 0}),
  tank: DS.belongsTo('tank', { inverse: null }),
  sensors: DS.hasMany('sensor'),
  networkCode: DS.attr('number'),
  needSetup: DS.attr('boolean', {defaultValue: true}),
  consumptions: DS.hasMany('consumption'),

  nivel: Ember.computed('food_level', function() {
    var food_level = this.get('food_level')

    if (food_level < 20) {
      return 'low'
    }

    if (food_level < 70) {
      return 'medium'
    }

    if (food_level <= 100) {
      return 'height'
    }
  })
});
