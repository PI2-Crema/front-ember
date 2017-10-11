import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('lot')
  },

  actions: {
    show(lot) {
      this.transitionTo('lots.show', lot);
    },
    delete(lot) {
      if (confirm('Tem certeza que deseja deletar essa lote?')) {
        lot.destroyRecord();
      }
    },
    edit(lot) {
      this.transitionTo('lots.edit', lot.id);
    }
  }
});
