import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-mock-services-example/tests/helpers/start-app';

var application;

module('Acceptance: ExampleService', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('uses real service', function(assert) {
  visit('/');

  andThen(() => {
    assert.ok(find(':contains("Real Service")').length,
      'expected to see "Real Service"');
  });
});
