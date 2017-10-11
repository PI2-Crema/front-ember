import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      sensor: this.store.findRecord('sensor', params.sensor_id),
      feeders: this.store.findAll('feeder')
    }
  },

  actions: {
    async save(sensor) {
      const s = await sensor
      s.save().then(() => {
        this.transitionTo('sensor');
      })
    }
  }
});
