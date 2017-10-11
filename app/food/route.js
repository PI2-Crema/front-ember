import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('food')
  },

  actions: {
    showFood(food) {
        this.transitionTo('food.show', food)
    },

    deleteFood(food) {
      if (confirm('Tem certeza que deseja deletar essa ração?')) {
        food.destroyRecord();
      }
    },

    editFood(food) {
      this.transitionTo('food.edit', food)
    }

  }
});
