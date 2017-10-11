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
  });
  this.route('feeder', function() {
    this.route('show', { path: '/show/:feeder_id' });
    this.route('edit', { path: '/edit/:feeder_id' });
    this.route('new');
  });
  this.route('sensor', function() {
    this.route('show', { path: '/show/:sensor_id' });
    this.route('new');
    this.route('edit', { path: '/edit/:sensor_id' });
  });
});

export default Router;
