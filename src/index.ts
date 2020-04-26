/* import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'John', age: 20 });

user.on('click', () => {
    console.log('Hello 👋');
});

user.on('click', () => {
    console.log('Clicked!');
});

user.on('change', () => {
    console.log('Changed!');
});

console.log(user);

user.trigger('click');

axios.get('http://localhost:3000/users/1')
    .then(res => console.log(res.data));
 */

import { User } from './models/User';

const user = new User({ name: 'Amy', age: 25 });

user.save();
