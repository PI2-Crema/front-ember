import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('number'),
  description: DS.attr('string')
});
