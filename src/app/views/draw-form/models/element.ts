export class Element {
    constructor(
        public id:string,
        public z: number,
        private isSelected: boolean,
        public width?: number, 
        public height?: number,    
        public x?: number, 
        public y?: number){    
            this.id = id;
            this.width = width || 0;
            this.height = width || 0;
            this.isSelected = false;
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
        }

        zIndexUp(){
            this.z++;
        }
        zIndexDown(){
            this.z--;
        }
        get selection(){
            return this.isSelected;
        }
        select(){
            this.isSelected = true;
        }
        deSelect(){
            this.isSelected = false;
        }
        toggleSelection(){
            if(this.isSelected){
                this.isSelected = false;
                return;
            }
            this.isSelected = true;
        }
        
}
