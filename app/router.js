import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('places', function() {
    this.route('new');
  });
  this.route('place', { path: '/places/:place_id'}, function() {
    this.route('edit');
  });
  this.route('items');
});

export default Router;
