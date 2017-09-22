import { Shape } from './shape';
export class CanvasState {

    public ctx;

    private canvas;
    private width;
    private height;
    private valid;
    private shapes;
    private dragging;
    private selection;
    private dragoffx;
    private dragoffy;

    constructor(canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = canvas.getContext('2d');

        this.valid = false; // when set to false, the canvas will redraw everything
        this.shapes = []; // the collection of things to be drawn
        this.dragging = false; // Keep track of when we are dragging
        this.selection = null;
        this.dragoffx = 0; // See mousedown and mousemove events for explanation
        this.dragoffy = 0;
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    getMouse(e) {
        let element = this.canvas,
            offsetX = 0,
            offsetY = 0,
            mx, my;
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

        return {
            x: mx,
            y: my
        };

    }
    mouseDown(e) {
        let mouse = this.getMouse(e);
        let mx = mouse.x;
        let my = mouse.y;
        let shapes = this.shapes;
        let l = shapes.length;
        for (let i = l - 1; i >= 0; i--) {
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
            this.valid = false;
        }
    }

    mouseMove(e) {
        if (this.dragging) {
            var mouse = this.getMouse(e);
            this.selection.x = mouse.x - this.dragoffx;
            this.selection.y = mouse.y - this.dragoffy;
            this.valid = false;
            this.draw();
        }
    }

    mouseUp(event) {
        this.dragging = false;
    }

    clear() {
        this.ctx.clearRect(0, 0, 800, 800);
    }

    draw() {
        if (!this.valid) {
            let ctx = this.ctx;
            let shapes = this.shapes;
            this.clear();

            // ** Add stuff you want drawn in the background all the time here **

            // draw all shapes
            let l = shapes.length;
            for (let i = 0; i < l; i++) {
                let shape = shapes[i];
                if (shape.x > this.width || shape.y > this.height || shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
                shapes[i].draw();
            }

            // draw selection
            // right now this is just a stroke along the edge of the selected Shape
            if (this.selection != null) {
                //   ctx.strokeStyle = this.selectionColor;
                //   ctx.lineWidth = this.selectionWidth;
                let mySel = this.selection;
                mySel.draw()
                //ctx.draw(mySel.elem, mySel.x, mySel.y, mySel.w, mySel.h)
            }

            // ** Add stuff you want drawn on top all the time here **

            this.valid = true;
        }
    }
}