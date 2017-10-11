import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
        lot: this.store.createRecord('lot'),
        foods: this.store.findAll('food')
    }
  },

  actions: {
    save(lot) {
      lot.save().then(() => {
        this.transitionTo('lots')
      })
    },

    willTransition() {
      this.controller.get('model.lot').rollbackAttributes();
    }
  }
});
