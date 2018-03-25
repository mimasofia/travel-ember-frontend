import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // return this.get('store').findAll('place');
    // this was added as a RSVP.hash becuase the data was being displayed
    // in the DOM even before being saved so this prevents that from happening
    // doesn't allow for 'dirty attributes' - not saved but still present
    return Ember.RSVP.hash({
      places: this.get('store').findAll('place').then(function (result) {
        return result.filterBy('isNew', false)
      })
    })
    // return this.get('store').createRecord('place', {})
  },
  actions: {
    // at the beginning of the project started everything from the top
    // level so left this here for future reference
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
