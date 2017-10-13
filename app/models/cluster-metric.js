import DS from 'ember-data';

export default DS.Model.extend({
   weight: DS.attr('number'),
   length: DS.attr('number'),
   tca: DS.attr('number'),
   cluster: DS.belongsTo('cluster')
});
