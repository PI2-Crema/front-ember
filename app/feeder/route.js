import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('feeder');
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
    }
  }
});
