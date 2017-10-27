import Ember from 'ember';

export default Ember.Route.extend({

  afterModel(model, transition) {
    if (model.get('needSetup')) {
      this.transitionTo('feeder.edit', model.get('id'));
    }
  },

  actions: {
    sendSettings(feeder) {
      Ember.$.get('http://localhost:3000/feeders/send_settings/' + feeder.get('id'))
    },

    showLot(id) {
      this.transitionTo('lots.show', id);
    },

    showFood(id) {
      this.transitionTo('food.show', id);
    }
  }
});
