import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('tank');
  },

  actions: {
    save(tank) {
      tank.save().then(() => {
        this.transitionTo('tank');
      })
    },

    delete(tank) {
      if (confirm('Tem certeza que deseja deletar essa tanque?')) {
        tank.destroyRecord();
      }
    }
  }
});
