// require('./test.scss');
import './test.scss';
import './test.v2.scss';
export function testDirective() {
    return {
        template: require('./test.html')
    }
}