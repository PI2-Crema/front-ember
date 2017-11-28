import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lots', function() {
    this.route('new');
    this.route('show', { path: '/show/:lot_id' });
    this.route('edit', { path: '/edit/:lot_id' });
  });
  this.route('food', function() {
    this.route('new');
    this.route('show', { path: '/show/:food_id' });
    this.route('edit', { path: '/edit/:food_id' });
  });
  this.route('tank', function() {
    this.route('show', { path: '/show/:tank_id' });
    this.route('edit', { path: '/edit/:tank_id' });
    this.route('new');
    this.route('new-cluster', { path: '/tratos/:tank_id' });
    this.route('metrics-register', { path: '/metricas/:tank_id/:cluster_id' });
    this.route('moviment-register', { path: '/extrato/:tank_id/:cluster_id' });
  });
  this.route('feeder', function() {
    this.route('show', { path: '/show/:feeder_id' });
    this.route('edit', { path: '/edit/:feeder_id' });
    this.route('new');
    this.route('settings', { path: '/settings/:feeder_id' });
  });
  this.route('sensor', function() {
    this.route('show', { path: '/show/:sensor_id' });
    this.route('new');
    this.route('edit', { path: '/edit/:sensor_id' });
  });
  this.route('reload', { path: 'reload/:feeder_id' });
  this.route('fish', function() {
    this.route('show',{ path: '/show/:fish_type_id' });
    this.route('new');
    this.route('edit',{ path: '/edit/:fish_type_id' });
  });
  this.route('setup', { path: '/:feeder_id' });
});

export default Router;
