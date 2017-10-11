import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('food', params.food_id);
  },

  actions: {
    save(food) {
      food.save().then(() => {
          this.transitionTo('food');
      })
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Vc ainda não salvou as mudanças. Deseja sair mesmo assim?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
