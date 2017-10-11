import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
        lot: this.store.findRecord('lot', params.lot_id),
        foods: this.store.findAll('food')
    }
  },

  actions: {
    async save(lot) {
      const l = await lot
      l.save().then(() => {
        this.transitionTo('lots')
      })
    },

    async willTransition() {
      const model = await this.controller.get('model.lot');

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
