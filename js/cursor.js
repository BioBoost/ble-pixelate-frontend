class Cursor {

    constructor(display) {
        this.xLoc = 0;
        this.yLoc = 0;
        this.display = display;
    }

    move_right() {
        this.move(1, 0);
    }

    move_left() {
        this.move(-1, 0);
    }

    move_up() {
        this.move(0, -1);
    }

    move_down() {
        this.move(0, 1);
    }

    move(deltaX, deltaY) {
        this.xLoc = Math.max(0, Math.min(this.xLoc + deltaX, Display.WIDTH-1));
        this.yLoc = Math.max(0, Math.min(this.yLoc + deltaY, Display.HEIGHT-1));
        display.highlight(this.xLoc, this.yLoc);
    }

    colorize(color) {
        this.display.set_pixel(this.xLoc, this.yLoc, color);
    }
}