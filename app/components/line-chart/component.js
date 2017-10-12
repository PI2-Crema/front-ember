import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  setup: false,

  /**
   * Construction handler
   * This will create the canvas and check the given
   * input values since Chart.js can react pretty odd
   * when getting wrong and/or missing values.
   */
  didInsertElement() {
    // debugger;
    var canvas  = this.get('element');
    var context = canvas.getContext('2d');

    canvas.width  = $(canvas).parent().width();
    canvas.height = $(canvas).parent().height();

    var type = this.get('type').charAt(0).toUpperCase() + this.get('type').slice(1);
    if(!type.match(/(Line|Bar|Radar|PolarArea|Pie|Doughnut)/)) type = "Line";
    var options = (this.get('options') !== undefined) ? this.get('options') : {};

    this.setProperties({
      '_type': type,
      '_canvas':  canvas,
      '_context': context,
      '_options': options
    });

    var data = this.get('data');

    if (data instanceof Promise) {
      data.then((resolvedData) => {
        this.set('_data', resolvedData);
        this.chartRender();
      });
    } else {
      this.set('_data', data);
      this.chartRender();
    }
  },

  /**
   * Render the chart to the canvas
   * This function is separated from the event hook to
   * allow data overwriting which more or less results
   * in updating the chart.
   */
  chartRender() {
    var chart = new Chart(this.get('_context'), {
      type: 'line',
      data: this.get('_data'),
      options: this.get('_options')
    })

    this.setProperties({
      '_chart': chart,
      'setup': true
    });
  },

  /**
   * Chart Update Handler
   * This will re-render the chart whenever its data or
   * options changes, if the 'update' property is set to true
   */
  chartUpdate: Ember.observer('data', 'options', function() {
    if(this.get('update') === true && this.get('setup') == true){
      this.set('_data', this.get('data'))
      this.chartRender();
    }
  })
});
