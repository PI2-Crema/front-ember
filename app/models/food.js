import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  thickness: DS.attr('number'),
  lots: DS.hasMany('lot')
});
