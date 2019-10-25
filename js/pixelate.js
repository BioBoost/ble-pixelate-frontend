let canvas = document.getElementById("displayCanvas");
let display = new Display(canvas);
let cursor = new Cursor(display);
// display.draw();

// display.set_pixel(0, 5, {r: 200, g:0, b:0});

cursor.move_right();
cursor.colorize({r: 200, g:0, b:0});
