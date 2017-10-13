import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return {
      cluster: this.store.findRecord('cluster', params.cluster_id),
      tank: this.store.findRecord('tank', params.tank_id),
      metric: this.store.createRecord('cluster-metric')
    }
  },

  actions: {
    save(metric, cluster, tank) {
      metric.set('cluster', cluster);

      metric.save().then(() => {
        this.transitionTo('tank.show', tank.get('id'))
      });
    }

  }
});
