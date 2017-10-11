import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      sensor: this.store.createRecord('sensor'),
      feeders: this.store.findAll('feeder')
    }
  }
});
