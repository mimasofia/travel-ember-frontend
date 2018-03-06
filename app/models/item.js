import DS from 'ember-data';

export default DS.Model.extend({
  itemName: DS.attr('string'),
  done: DS.attr('boolean'),
  place: DS.belongsTo('place')
});
