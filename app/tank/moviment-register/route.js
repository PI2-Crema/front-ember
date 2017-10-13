import Ember from 'ember';

export default Ember.Route.extend({
  async model(params) {
    const tanks = await this.store.findAll('tank');
    const tank = await this.store.findRecord('tank', params.tank_id);

    return {
      cluster: this.store.findRecord('cluster', params.cluster_id),
      tank: tank,
      counter: this.store.createRecord('cluster-counter'),
      types: this.store.findAll('cluster-counter-type'),
      tanks: tanks.removeObject(tank)
    }
  },

  actions: {
    save(counter, cluster, tank) {
      counter.set('cluster', cluster);

      counter.save().then(() => {
        var add_tank = this.controller.get('model.add_tank');
        var remove_tank = this.controller.get('model.remove_tank');
        var tankID = tank.get('id');
        var quantity = counter.get('quantity');
        var url = ''

        if (add_tank != null) {
          url = `http://localhost:3000/tanks/register_transation/${tankID}/3/${quantity}`
        }

        if (remove_tank != null) {
          url = `http://localhost:3000/tanks/register_transation/${tankID}/1/${quantity}`
        }

        if (add_tank != null || remove_tank != null) {
          Ember.$.ajax({
            type: "POST",
            url: url,
            success: (got) => {
              if (got.success == false) {
                alert('Falha ao gerar transferencia.')
              } else {
                  this.transitionTo('tank.show', tank.get('id'))
              }
            },
          });
        } else {
          this.transitionTo('tank.show', tank.get('id'))
        }
      });
    }
  }
});
