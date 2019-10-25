class Display {
    static WIDTH = 32;
    static HEIGHT = 16;
    static PIXELS = 20;
    static SPACE = 5;
    static RADIUS = 10;

    constructor(canvas) {
        this.width = canvas.width  = (Display.WIDTH+1) * (2*Display.RADIUS + Display.SPACE);
        this.height = canvas.height = (Display.HEIGHT+1) * (2*Display.RADIUS + Display.SPACE);
        this.highlight_location = {x: 0, y: 0};
        this.context = canvas.getContext("2d");
        this.build_grid();
        this.draw();
    }

    build_grid() {
        this.grid = Array(Display.HEIGHT).fill().map(() => Array(Display.WIDTH).fill({r: 0, g:0, b:0}));
    }

    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    draw() {
        this.clear();
        for (let row = 0; row < Display.HEIGHT; row++) {
            for (let col = 0; col < Display.WIDTH; col++) {
                let x = (2*Display.RADIUS + Display.SPACE)*(col+1);
                let y = (2*Display.RADIUS + Display.SPACE)*(row+1) - Display.RADIUS;

                if (col === this.highlight_location.x && row === this.highlight_location.y) {
                    this.context.fillStyle = `lime`;
                    this.context.fillRect(x - Display.RADIUS, y - Display.RADIUS, 2*Display.RADIUS, 2*Display.RADIUS);
                }

                this.context.beginPath();
                this.context.arc(x, y, Display.RADIUS, 0, 2 * Math.PI);
                this.context.fillStyle = `rgb(${this.grid[row][col].r}, ${this.grid[row][col].g}, ${this.grid[row][col].b})`;
                this.context.fill();
            }
        }
    }

    set_pixel(x, y, color) {
        this.grid[y][x] = color;
        this.draw();
    }

    highlight(x, y) {
        this.highlight_location.x = x;
        this.highlight_location.y = y;
        this.draw();
    }
}