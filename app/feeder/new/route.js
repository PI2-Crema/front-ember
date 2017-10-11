import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
        feeder: this.store.createRecord('feeder'),
        tanks: this.store.findAll('tank')
    }
  },

  actions: {
    willTransition() {
      this.controller.get('model.feeder').rollbackAttributes();
    }  
  }

});
