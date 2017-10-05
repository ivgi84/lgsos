import {Element} from './element';
export class Upload {
    constructor (
        public id: string,
        public text: string,
        public isSelected: boolean,
        public src: string,
        public level: number
    ) {}
}
