import _ from 'lodash';
import {greet1} from './modules/foo.js';
 
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const p1 = document.createElement('div');
    p1.textContent = greet1();
    element.appendChild(p1);
    
    return element;
}
document.body.appendChild(component());
