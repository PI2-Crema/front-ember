import Ember from 'ember';
import ENV from 'front/config/environment'

export default Ember.Controller.extend({
  data: [{
    hour: null,
    quantity: null,
    minute: null,
  },
  {
    hour: null,
    quantity: null,
    minute: null,
  },
  {
    hour: null,
    quantity: null,
    minute: null,
  },
  {
    hour: null,
    quantity: null,
    minute: null,
  },
  {
    hour: null,
    quantity: null,
    minute: null,
  },
  {
    hour: null,
    quantity: null,
    minute: null,
  }],

  actions: {
    sendData(model) {
        var data = this.get('data');
        var dataArray = [];

        data.forEach(function(d) {
          if(d.hour != null && d.minute != null && d.quantity != null) {
            dataArray.push({
              hour: d.hour,
              quantity: d.quantity * 10,
              minute: d.minute,
            })
          }
        });


        var dataToSend = {
          id: model.id,
          data: dataArray
        }

        const baseURL = ENV.apiURL;
        const path = `/feeders/send_settings/${model.id}`;
        Ember.$.ajax({
          type: "POST",
          url: baseURL+path,
          data: dataToSend,
          success: () => {
            alert('Configuração enviada!')
          }
        });
    }
  }
});
