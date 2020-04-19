import { User } from './models/User';

const user = new User({ name: 'John', age: 20 });

user.set({ name: 'Jack' });

console.log(user.get('age'));
console.log(user.get('name'));