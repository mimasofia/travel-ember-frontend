import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('place');
    // return this.get('store').createRecord('place', {})
  }
  // actions: {
  //   save(place) {
  //     console.log('please click this thing')
  //     console.log('MODEL', this.get('place'))
  //     return place.save()
  //   }
});
