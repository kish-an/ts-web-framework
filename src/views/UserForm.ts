import { User, UserProps } from '../models/User';
import { View } from './View';

interface EventsMap {
    [key: string]: () => void;
}

export class UserForm extends View<User, UserProps> {
    eventsMap(): EventsMap {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        if (input) {
            const name = input.value;

            this.model.set({ name });
        }

    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input type="text" />
                <button class="set-name">Update Name</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `;
    }
}
