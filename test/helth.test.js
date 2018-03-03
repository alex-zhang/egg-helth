'use strict';

const mock = require('egg-mock');

describe('test/helth.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/helth-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, helth')
      .expect(200);
  });
});
