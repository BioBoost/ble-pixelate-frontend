class Cursor {

    constructor(display) {
        this.xLoc = 0;
        this.yLoc = 0;
        this.display = display;
    }

    move_right() {
        this.xLoc = (this.xLoc + 1) % Display.WIDTH;
    }

    colorize(color) {
        this.display.set_pixel(this.xLoc, this.yLoc, color);
    }
}