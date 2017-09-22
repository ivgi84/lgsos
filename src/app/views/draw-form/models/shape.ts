export class Shape {
    private ctx;
    private canvasState;
    public elem;
    private x;
    private y;
    private h;
    private w;
    private id;

    constructor(canvasState, elem){
        this.canvasState = canvasState;
        this.ctx = this.canvasState.ctx;
        this.elem = elem;
        this.x = 0;
        this.y = 0;
        this.h = elem.naturalHeight;
        this.w = elem.naturalWidth;
        this.id = 'id' + elem.naturalHeight + elem.naturalWidth;
        this.add();
    }

    // on this level shape should draw himself, need to pass cnavas context;
    public draw(){
        this.ctx.drawImage(this.elem, this.x, this.y, this.w, this.h); 
    }

    //add shape to canvasState
    public add(){
        this.canvasState.addShape(this);
    }

    public contains(mx, my){
        return (this.x <= mx) && (this.x + this.w >= mx) && (this.y <= my) && (this.y + this.h >= my);
    }
}
