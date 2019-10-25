class Cursor {

    constructor(display) {
        this.xLoc = 0;
        this.yLoc = 0;
        this.display = display;
        this.color = {r:200, g:100, b:10};
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
        display.highlight(this.xLoc, this.yLoc, this.color);
    }

    colorize() {
        this.display.set_pixel(this.xLoc, this.yLoc, this.color);
    }

    change_color(color) {
        this.color = color;
        display.highlight(this.xLoc, this.yLoc, this.color);
    }
}