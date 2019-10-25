let canvas = document.getElementById("displayCanvas");
let display = new Display(canvas);
let cursor = new Cursor(display);

let controller = new BleController();
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("connect").addEventListener("click", () => {
        controller.connect()
        .then(() => {
            console.log("Connected to BLE controller");
            cursor.change_color({r:0, g:0, b:200});
            controller.addEventListener('touch', (event) => {
                switch(event.touchedKey) {
                    case 'R': cursor.move_right(); break;
                    case 'L': cursor.move_left(); break;
                    case 'U': cursor.move_up(); break;
                    case 'D': cursor.move_down(); break;
                    case 'X': cursor.colorize({r: 200, g:0, b:0}); break;
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    });
});