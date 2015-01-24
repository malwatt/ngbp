/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe( 'home section', function() {
  beforeEach( angular.mock.module( 'ngSS.home' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).to.be.ok();
  }));
});

