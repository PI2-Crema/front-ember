import Ember from 'ember';
import ENV from 'front/config/environment'

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);
    this.getData();

  },

  getData: async function() {
    const baseURL = ENV.apiURL;
    const path = `/feeders/fish_history/${this.get('targetID')}`;
    const plotData = await Ember.$.getJSON(baseURL + path);
    this.set('total', plotData.total);

    this.plotWithData([
      plotData.current,
      plotData.death,
      plotData.transfer_out,
      plotData.transfer_in
    ]);
  },

  plotWithData(data) {
    var canvas  = this.$().find('canvas')[0];
    var context = canvas.getContext('2d');
    var config = this.getConfigWith(data);

    var chart = this.get('chart');

    if (chart) {
      chart.destroy();
    }
    this.set('chart', new Chart(context, config));
  },

  getConfigWith(data) {
    return {
         type: 'doughnut',
         data: {
             datasets: [{
                 data: data,
                 backgroundColor: [
                     '#36CC79',
                     '#EA6844',
                     '#FB9D1B',
                     '#3398E9'
                 ],
                 label: 'Dataset 1'
             }],
             labels: [
                 "Vivos",
                 "Mortos",
                 "Retirados",
                 "Colocados"
             ]
         },
         options: {
             responsive: true,
             legend: {
                 position: 'top',
             },
             title: {
                 display: true,
                 text: 'Histório de movimentações de peixes'
             },
             animation: {
                 animateScale: true,
                 animateRotate: true
             }
         }
     }
  }
});
