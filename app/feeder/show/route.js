import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    showLot(id) {
      this.transitionTo('lots.show', id);
    },

    showFood(id) {
      this.transitionTo('food.show', id);
    }
  }
});
