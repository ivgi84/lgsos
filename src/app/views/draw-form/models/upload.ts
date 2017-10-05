import {Element} from './element';

export class Upload extends Element{
    constructor (
        public id: string,
        public z: number,
        public src: string,
        public width?: number,
        public height?: number,
    ) {
        super(id, 0, false, width, height);
    }

}
