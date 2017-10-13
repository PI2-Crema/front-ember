import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('fish-type');
  },

  actions: {
    save(fish) {
      fish.save().then(() => {
        this.transitionTo('fish.index');
      });
    },

    delete(fish) {
      if (confirm('Tem certeza que deseja deletar essa tipo de peixe?')) {
        fish.destroyRecord();
      }
    }
  }
});
