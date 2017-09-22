export class Shape {
    private canvasState;
    private elem;
    private x;
    private y;
    private h;
    private w;
    private id;

    constructor(ctx, elem){
        this.canvasState = ctx;
        this.elem = elem;
        this.x = 0;
        this.y = 0;
        this.h = elem.naturalHeight;
        this.w = elem.naturalWidth;
        this.id = 'id'+elem.naturalHeight + elem.naturalWidth;
    }

    public draw(){
        this.canvasState.drawImage(this.elem,0,0);
        this.canvasState.addShape(this);
    }
    public clear(){
        this.canvasState.clearRect(0,0,800,800);
    }
    public contains(mx, my){
        return (this.x <= mx) && (this.x + this.w >= mx) && (this.y <= my) && (this.y + this.h >= my);
    }
}
