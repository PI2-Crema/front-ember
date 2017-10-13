import Ember from 'ember';

export default Ember.Route.extend({
  async model() {
    const feeders = await this.store.findAll('feeder');

    return {
      readyFeeders: feeders.filterBy('needSetup', false),
      needSetupFeeders: feeders.filterBy('needSetup', true)
    };
  },

  actions: {
    save(feeder) {
      feeder.save().then(() => {
        this.transitionTo('feeder')
      })
    },

    delete(feeder) {
      if (confirm('Tem certeza que deseja deletar essa alimentador?')) {
        feeder.destroyRecord();
      }
    },

    needRefresh() {
      this.refresh();
    }
  }
});
