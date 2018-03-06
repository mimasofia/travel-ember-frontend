import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('place');
    // return this.get('store').createRecord('place', {})
  },
  actions: {
    // delete(place){
    //   console.log('maybe')
    //   return place.destroyRecord()
    // },
    edit (place) {
      // console.log('IN PLACE PLEASE WORK')
      console.log(place)
      // console.log('STOREt', this.get('store').find('place'))
      return place.save()
    }
  }
});
