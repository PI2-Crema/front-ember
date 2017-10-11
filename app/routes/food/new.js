import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('food')
  },

  actions: {
    save(food) {
      food.save().then(() => {
          this.transitionTo('food');
      })
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
