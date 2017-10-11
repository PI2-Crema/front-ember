import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('sensor');
  },

  actions: {
    save(sensor) {
      sensor.save().then(() => {
        this.transitionTo('sensor');
      });
    },
    delete(sensor) {
      if (confirm('Tem certeza que deseja deletar essa sensor?')) {
        sensor.destroyRecord();
      }
    },

    async generateData(id) {
      const response = await Ember.$.getJSON('http://localhost:3000/sensors/generate_random_data/' + id + '/100');
      if (response.success) {
        alert('Data gerada')
      } else {
        alert ('Falhou')
      }
    }
  }
});
