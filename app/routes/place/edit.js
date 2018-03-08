import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  // model (params) {
  //   const id = +params.place_id
  //   return this.get('store').findRecord('place', id)
  // },
  actions: {
    edit(place) {
      console.log('place is', place)
      console.log('edit in place')
      return place.save()
        .then(()=> this.transitionTo('place'))
        .then(() => this.get('flashMessages').success('Successfully Saved'))
        .catch(() => {
          this.get('flashMessages').danger('There was a problem. Please try again.')
        })
    }
  }
});
