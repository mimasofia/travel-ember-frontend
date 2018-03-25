import Component from '@ember/component';

export default Component.extend({
  // set newIen as an empty object to use
  newItem: {},
actions: {
  save (place) {
      // console.log('THIS MADE IT')
      // the data from the form is saved in a variable called newThing
      const newThing = this.get('newItem')
      // console.log('PLACE IN TRAVEL', place)
      // what to associate this new item with the list
      // the place the newThing variable belongs to is being set here at the
      // place sungular found in the middle level with ID
      newThing.place = this.get('place')
      // send the action up to the middle level and the variable
      this.sendAction('addItem', newThing)
      // this clears the form input after a click of the button 'save item'
      this.set('newItem.itemName', '');
    },
      deleteItem (item) {
        // console.log('item', item)
        return item.destroyRecord()
      }
  }
});
