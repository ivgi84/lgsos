import { Shape } from './shape';
export class CanvasState {
    private canvas;
    private width;
    private height;
    private ctx;

    private valid;
    private shapes;
    private dragging;
    private selection;
    private dragoffx;
    private dragoffy;
    
    constructor(canvas){
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = canvas.getContext('2d');

        this.valid = false; // when set to false, the canvas will redraw everything
        this.shapes = [];  // the collection of things to be drawn
        this.dragging = false; // Keep track of when we are dragging
        this.selection = null;
        this.dragoffx = 0; // See mousedown and mousemove events for explanation
        this.dragoffy = 0;
    }
    getMouse(e){
        let element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
        if (element.offsetParent !== undefined) {
          do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
          } while ((element = element.offsetParent));
        }
      
        // Add padding and border style widths to offset
        // Also add the <html> offsets in case there's a position:fixed bar
        // offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
        // offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;
      
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
        
        return {x: mx, y: my};

    }
    mouseDown(e){
        let mouse = this.getMouse(e);
        let mx = mouse.x;
        let my = mouse.y;
        let shapes = this.shapes;
        let l = shapes.length;
        for (let i = l-1; i >= 0; i--) {
          if (shapes[i].contains(mx, my)) {
            let mySel = shapes[i];
            console.log(mySel);
            this.dragoffx = mx - mySel.x;
            this.dragoffy = my - mySel.y;
            this.dragging = true;
            this.selection = mySel;
            this.valid = false;
            return;
          }
    }
    if (this.selection) {
        this.selection = null;
        this.valid = false; // Need to clear the old selection border
      }
    }
    drawImage(img, x, y){
        this.ctx.drawImage(img, x, y);
    }
    addShape(shape){
        this.shapes.push(shape);
    }
}
