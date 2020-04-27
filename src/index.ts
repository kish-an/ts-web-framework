import { User } from './models/User';

const user = new User({ name: 'Jack', age: 19 });

const userProps = {
    name: user.attributes.get('name'),
    age: user.attributes.get('age'),
}

user.sync.save(userProps);
