import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
        feeder: this.store.findRecord('feeder', params.feeder_id),
        tanks: this.store.findAll('tank')
    }
  },

  actions: {
    async save(feederPromise) {
      const feeder = await feederPromise
      feeder.save().then(() => {
        this.transitionTo('feeder')
      })
    },

    async willTransition(transition) {
      if (this.get('controller.model.feeder.hasDirtyAttributes')) {
        let confirmation = confirm("Vc ainda não salvou as mudanças. Deseja sair mesmo assim?");

        if (confirmation) {
          const model = await this.controller.get('model.feeder')
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
