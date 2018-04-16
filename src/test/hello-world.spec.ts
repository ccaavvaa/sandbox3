// tslint:disable:only-arrow-functions
import * as sandbox from '../lib/index';
import 'mocha';
import * as chai from 'chai';
const expect = chai.expect;
describe('smoke test', function () {
    it('should not smoke', function() {
        const hw = new sandbox.HelloWorld();
        const actual = hw.sayHello('x');
        const expected = 'Hello x';
        expect(actual).equals(expected);
    });
});
