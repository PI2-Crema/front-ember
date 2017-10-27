import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      cluster: this.store.createRecord('cluster'),
      fishs: this.store.findAll('fish-type'),
      tank: this.store.createRecord('tank')
    }
  },

  actions: {
    save(tank, cluster) {
      tank.save().then((newTank) => {
        cluster.set('tank', newTank);

        cluster.save().then(() => {
          this.transitionTo('tank.show', tank.get('id'));
        });
      })
    },
    willTransition() {
      this.controller.get('model.tank').rollbackAttributes();
    }
  }
});
