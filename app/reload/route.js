import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      consumption: this.store.createRecord('consumption'),
      feeder: this.store.findRecord('feeder', params.feeder_id),
      lots: this.store.findAll('lot')
    }
  },

  actions: {
    save(consumption, feeder) {
      consumption.set('feeder', feeder);
      consumption.save().then(() => {
        this.transitionTo('feeder.show', feeder.get('id'));
      });
    }
  }
});
