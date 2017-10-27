import Ember from 'ember';

export default Ember.Component.extend({

  panelType: Ember.computed('feeder', function() {
    let nivel = this.get('feeder.nivel');
    let needSetup = this.get('feeder.needSetup');

    if (needSetup) {
      return 'panel-gray'
    } else if (nivel == 'low') {
      return 'panel-red'
    } else if (nivel == 'medium') {
      return 'panel-yellow'
    } else if (nivel == 'height') {
      return 'panel-green'
    }
  }),

  actions: {
    delete(feeder) {
      if (confirm('Tem certeza que deseja deletar essa alimentador?')) {
        feeder.destroyRecord().then(() => {
          this.sendAction('needRefresh');
        });
      }
    },

    show() {
      if (this.get('feeder.needSetup')) {
        this.get('router').transitionTo('feeder.edit', this.get('feeder.id'))
      } else {
        this.get('router').transitionTo('feeder.show', this.get('feeder.id'))
      }
    }
  }
});
