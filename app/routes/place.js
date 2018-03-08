import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model (params) {
    // return Ember.RSVP.hash({
    //   place: this.get('store').findRecord('place', params.place_id),
    //   newItem: {itemName: null}
    //   // items: this.get('store').findAll('item')
    // })
    const id = +params.place_id
    return this.get('store').findRecord('place', id)
  },
  actions: {
    delete (place) {
      console.log('PLACE is', place)
      return place.destroyRecord()
        .then(() => this.transitionTo('places'))
        .then(() => this.get('flashMessages').success('Successfully Deleted'))
        .catch(() => {
          this.get('flashMessages').danger('There was a problem. Please try again.')
        })
    },
      // deleteItem (item) {
      //   // console.log('item', item)
      //   return item.destroyRecord()
      // },
      // // saveItem (newItem, place) {
      //   // console.log('Save Item')
      //   console.log('newITEM', newItem)
      //
      //   newItem.place = place
      //   const item = this.get('store').createRecord('item', newItem)
      //   return item.save()
      // }
      addItem(newIten) {
      // console.log('in place for items')
      const item = this.get('store').createRecord('item', newIten)
      return item.save()
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
  },
});
