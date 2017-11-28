import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    sendData(feeder, data) {
        console.log(feeder);
        console.log(data);
    }
  }
});
