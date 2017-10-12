import Ember from 'ember';

function newDate(days) {
  return moment().add(days, 'd').toDate();
}

export default Ember.Component.extend({
  type: 'line',
  options: {
    title: {
      display: true,
      text: 'Some title'
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
  },

  data: Ember.computed('targetID', async function() {
    const plotData = await Ember.$.getJSON('http://localhost:3000/sensors/formated_records_data/' + this.get('targetID'));

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
  })

});
