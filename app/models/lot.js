import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('number'),
  validity: DS.attr('date'),
  buy_date: DS.attr('date'),
  quantity: DS.attr('number'),
  current_quantity: DS.attr('number'),
  end_date: DS.attr('date'),
  food: DS.belongsTo('food')
});
