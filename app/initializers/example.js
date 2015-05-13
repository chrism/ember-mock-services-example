import Example from '../services/example';

export function initialize(container, application) {
  application.register('service:example', Example);
}

export default {
  name: 'example',
  initialize: initialize
};
