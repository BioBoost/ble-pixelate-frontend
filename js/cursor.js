class Cursor {

    constructor(display) {
        this.xLoc = 0;
        this.yLoc = 0;
        this.display = display;
    }

    move_right() {
        this.xLoc = (this.xLoc + 1) % Display.WIDTH;
    }

    move_left() {
        this.xLoc = (this.xLoc - 1) % Display.WIDTH;
    }

    move_up() {
        this.yLoc = (this.yLoc - 1) % Display.HEIGHT;
    }

    move_down() {
        this.yLoc = (this.yLoc + 1) % Display.HEIGHT;
    }

    colorize(color) {
        this.display.set_pixel(this.xLoc, this.yLoc, color);
    }
}