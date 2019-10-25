class Cursor {

    constructor() {
        this.xLoc = 0;
        this.yLoc = 0;
    }

    move_right() {
        this.xLoc = (this.xLoc + 1) % 32;           // Magic !!!
    }
}