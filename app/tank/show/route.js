import Ember from 'ember';

export default Ember.Route.extend({
  async model(params) {
    const tank = await this.store.findRecord('tank', params.tank_id);
    const clusters = await tank.get('clusters')

    return {
      tank: tank,
      current: clusters.filterBy('isDone', false)[0],
      passed: clusters.filterBy('isDone', true)
    };
  },

  actions: {
    endCluster(cluster) {
      // var now = moment().add(5, 'days');
      var now = moment();

      cluster.set('isDone', true);
      cluster.set('endDate', now.toDate());
      cluster.save().then(() => {
        this.refresh();
      });
    }
  }
});
