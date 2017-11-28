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

      var direction = this.controller.get('direction');
      var id = this.controller.get('identifier');

      tank.save().then((newTank) => {
        cluster.set('tank', newTank);

        cluster.save().then(() => {
          if (direction) {
            this.transitionTo('feeder.show', id);
          } else {
            this.transitionTo('tank.show', tank.get('id'));
          }
        });
      })
    },
    willTransition() {
      this.controller.get('model.tank').rollbackAttributes();
    }
  }
});
