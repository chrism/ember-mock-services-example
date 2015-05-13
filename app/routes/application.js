import Ember from 'ember';

export default Ember.Route.extend({
  example: Ember.inject.service(),

  model() {
    return this.get('example').model();
  }
});
