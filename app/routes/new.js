import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  return this.get('store').createRecord('place', {})
},
  actions: {
    save(newPlace) {
      console.log('god work please')
      return newPlace.save()
        .then(() => this.transitionTo('places'))
    }
  }
});
