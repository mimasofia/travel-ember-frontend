import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('place');
    // return this.get('store').createRecord('place', {})
  },
  actions: {
    delete(place){
      console.log('maybe')
      return place.destroyRecord()
    }
  }
});
