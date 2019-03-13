'use strict';

const mock = require('egg-mock');

describe('test/codis.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/codis-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, codis')
      .expect(200);
  });
});
