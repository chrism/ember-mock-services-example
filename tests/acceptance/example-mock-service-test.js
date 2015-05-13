import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-mock-services-example/tests/helpers/start-app';

var application;

var example = Ember.Service.extend({
  model() {
    return 'Mock Service';
  }
});

module('Acceptance: ExampleMockService', {
  beforeEach: function() {
    application = startApp({ example });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('uses mock service', function(assert) {
  visit('/');

  andThen(() => {
    assert.ok(find(':contains("Mock Service")').length,
      'expected to see "Mock Service"');
  });
});
