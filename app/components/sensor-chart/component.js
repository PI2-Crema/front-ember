import Ember from 'ember';
import ENV from 'front/config/environment'

export default Ember.Component.extend({
  type: 'line',
  options: Ember.computed('title', function() {
    return {
      title: {
        display: true,
        text: this.get('title')
      },
      scales: {
        xAxes: [{
          type: "time",
          time: {
            format: 'MM/DD/YYYY HH:mm',
            // round: 'day'
            tooltipFormat: 'll HH:mm'
          },
          scaleLabel: {
            display: true,
            labelString: 'Data'
          }
        }, ],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Valor'
          }
        }]
      }
    };
  }),

  data: Ember.computed('targetID', 'filterType', async function() {
    const baseURL = ENV.apiURL;
    const path = `/sensors/formated_records_data/${this.get('targetID')}`;
    const query = this.get('filterType') ? `?filterType=${this.get('filterType')}` : ''
    const plotData = await Ember.$.getJSON(baseURL + path + query);

    return {
      labels: plotData.x.map(function(dateString) {
        return new Date(dateString);
      }),
      datasets: [{
          data: plotData.y,
          label: plotData.label,
          borderColor: "#3e95cd",
          fill: true
        }
      ]
    }
  }),

  actions: {
    filter(filterType) {
      this.set('filterType', filterType);
    }
  }
});
