import { User } from './models/User';

const user = new User({ id: 2, name: 'Joeseph', age: 36 });

user.on('save', () => {
    console.log(user);
});

user.save();
