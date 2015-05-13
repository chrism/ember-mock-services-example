import Example from '../services/example';

export function initialize(container, application) {
  const exampleService = application.example || Example;
  application.register('service:exampleService', exampleService);
}

export default {
  name: 'exampleService',
  initialize: initialize
};
