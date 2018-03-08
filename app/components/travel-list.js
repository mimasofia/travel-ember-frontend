import Component from '@ember/component';

export default Component.extend({
  newItem: {},
actions: {
  save (place) {
      // console.log('THIS MADE IT')
      const newThing = this.get('newItem')
      // console.log('PLACE IN TRAVEL', place)
      // what to associate this new item with the list
      newThing.place = this.get('place')
      this.sendAction('addItem', newThing)
    },
      deleteItem (item) {
        // console.log('item', item)
        return item.destroyRecord()
      }
  }
});
