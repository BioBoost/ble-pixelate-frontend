class Display {
    static WIDTH = 32;
    static HEIGHT = 32;
    static PIXELS = 20;
    static SPACE = 5;
    static RADIUS = 10;

    constructor(canvas) {
        canvas.width  = (Display.WIDTH+1) * (2*Display.RADIUS + Display.SPACE);
        canvas.height = (Display.HEIGHT+1) * (2*Display.RADIUS + Display.SPACE);
        this.context = canvas.getContext("2d");
    }

    draw() {
        for (let col = 0; col < Display.WIDTH; col++) {
            for (let row = 0; row < Display.HEIGHT; row++) {
                this.context.beginPath();
                this.context.arc((2*Display.RADIUS + Display.SPACE)*(col+1), (2*Display.RADIUS + Display.SPACE)*(row+1), Display.RADIUS, 0, 2 * Math.PI);
                this.context.stroke();
            }
        }
    }
    
}