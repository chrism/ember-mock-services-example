import Ember from 'ember';

export default Ember.Route.extend({
  exampleService: Ember.inject.service(),

  model() {
    return this.get('exampleService').model();
  }
});
