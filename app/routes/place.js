import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  // for ui success and failure messages Ember service
  flashMessages: service(),
  model (params) {
    //  had attempted to add items right from this level however had glitch
    // that wouldn't load the name of the place because of the RSVP.hash
    // left it here for future reference
    // return Ember.RSVP.hash({
    //   place: this.get('store').findRecord('place', params.place_id),
    //   newItem: {itemName: null}
    //   // items: this.get('store').findAll('item')
    // })
    // finds a record buy its specific ID that is in the params for place
    const id = +params.place_id
    return this.get('store').findRecord('place', id)
  },
  actions: {
    delete (place) {
      // console.log('PLACE is', place)
      // this destrys a record with a specific id which is being found  with
      // const = id
      // once successful deletion it takes the user back to the top level
      // also have message of succes or failure
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
      //  items are saved at this level with data passed from the component
      // travel-list with the 'action-up'
      // console.log('in place for items')
      // messages for success and failure
      // newItem is part of the lower level that was passed with the
      // sendAction
      const item = this.get('store').createRecord('item', newIten)
      return item.save()
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
  },
});
