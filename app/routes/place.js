import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    const id = +params.place_id
    return this.get('store').findRecord('place', id)
  },
  actions: {
    delete (place) {
      console.log('PLACE is', place)
      return place.destroyRecord()
        .then(() => this.transitionTo('places'))
    }
    // edit(place) {
    //   console.log('place is', place)
    //   console.log('edit in place')
    //   return place.save()
    // }
  }
});
