import { Model } from '../models/Model';

interface EventMap {
    [key: string]: () => void;
}

interface RegionMap {
    [key: string]: Element;
}

export abstract class View<T extends Model<K>, K> {
    regions: RegionMap = {};

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    abstract template(): string;

    // Not forcing regionsMap and eventsMap to be abstract as classes extending View may not contain events or nest views
    regionsMap(): { [key: string]: string } {
        return {};
    }

    eventsMap(): EventMap {
        return {};
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);

            if (element) {
                this.regions[key] = element;
            }
        }
    }

    onRender(): void {}

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }
}
