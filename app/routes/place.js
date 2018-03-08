import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      place: this.get('store').findRecord('place', params.place_id),
      newItem: {itemName: null}
      // items: this.get('store').findAll('item')
    })

    // const id = +params.place_id
    // return this.get('store').findRecord('place', id)
  },
  actions: {
    delete (place) {
      // console.log('PLACE is', place)
      return place.destroyRecord()
        .then(() => this.transitionTo('places'))
    },
      deleteItem (item) {
        // console.log('item', item)
        return item.destroyRecord()
      },
      saveItem (newItem, place) {
        // console.log('Save Item')
        console.log('newITEM', newItem)

        newItem.place = place
        const item = this.get('store').createRecord('item', newItem)
        return item.save()
      }
  }
});
