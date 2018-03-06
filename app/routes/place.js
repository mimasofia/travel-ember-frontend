import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    const id = +params.place_id
    return this.get('store').findRecord('place', id)
  },
  actions: {
    // edit (model) {
    //   console.log('IN PLACE PLEASE WORK')
    //   console.log('MODEL IS', model)
    //   return this.get('place').save()
    // }
  }
});
