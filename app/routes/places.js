import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // return this.get('store').findAll('place');
    return Ember.RSVP.hash({
      places: this.get('store').findAll('place').then(function (result) {
        return result.filterBy('isNew', false)
      })
    })
    // return this.get('store').createRecord('place', {})
  },
  actions: {
    // delete(place){
    //   console.log('maybe')
    //   return place.destroyRecord()
    // },
    // edit (place) {
    //   // console.log('IN PLACE PLEASE WORK')
    //   console.log(place)
    //   // console.log('STOREt', this.get('store').find('place'))
    //   return place.save()
    // }
  }
});
