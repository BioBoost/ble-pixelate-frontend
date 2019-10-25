class Display {
    static WIDTH = 32;
    static HEIGHT = 16;
    static PIXELS = 20;
    static SPACE = 5;
    static RADIUS = 10;

    constructor(canvas) {
        canvas.width  = (Display.WIDTH+1) * (2*Display.RADIUS + Display.SPACE);
        canvas.height = (Display.HEIGHT+1) * (2*Display.RADIUS + Display.SPACE);
        this.context = canvas.getContext("2d");
        this.build_grid();
        this.draw();
    }

    build_grid() {
        this.grid = Array(Display.HEIGHT).fill().map(() => Array(Display.WIDTH).fill({r: 0, g:0, b:0}));
    }

    draw() {
        console.log(this.grid);
        for (let row = 0; row < Display.HEIGHT; row++) {
            for (let col = 0; col < Display.WIDTH; col++) {
                this.context.beginPath();
                this.context.arc((2*Display.RADIUS + Display.SPACE)*(col+1), (2*Display.RADIUS + Display.SPACE)*(row+1), Display.RADIUS, 0, 2 * Math.PI);
                this.context.fillStyle = `rgb(${this.grid[row][col].r}, ${this.grid[row][col].g}, ${this.grid[row][col].b})`;
                this.context.fill();
            }
        }
    }

    set_pixel(x, y, color) {
        this.grid[y][x] = color;
        this.draw();
    }
}