import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  nivel: DS.attr('string', {defaultValue: 'low'}),
  tank: DS.belongsTo('tank', { inverse: null }),
  sensors: DS.hasMany('sensor')
});
