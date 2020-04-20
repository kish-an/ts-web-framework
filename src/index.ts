import { User } from './models/User';

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
