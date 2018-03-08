import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model() {
  return this.get('store').createRecord('place', {})
},
  actions: {
    save(newPlace) {
      console.log('god work please')
      return newPlace.save()
        .then(() => this.transitionTo('places'))
        .then(() => this.get('flashMessages').success('Successfully Added'))
        .catch(() => {
          this.get('flashMessages').danger('There was a problem. Please try again.')
        })
    }
  }
});
