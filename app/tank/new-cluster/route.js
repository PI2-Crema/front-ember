import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return {
      cluster: this.store.createRecord('cluster'),
      fishs: this.store.findAll('fish-type'),
      tank: this.store.findRecord('tank', params.tank_id)
    }
  },

  actions: {
    save(cluster, tank) {
      cluster.set('tank', tank);

      cluster.save().then(() => {
        this.transitionTo('tank.show', tank.get('id'));
      });
    }
  }

});
