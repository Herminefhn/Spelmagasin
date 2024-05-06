function Canvas2D () {
    this._Canvas = document.getElementById(`screen`);
    this._CanvasContext = this._Canvas.getContext(`2D`);
}

Canvas2D.prototype.clear = function () {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

Canvas2D.prototype.drawImage = function (image, position) {
    this._CanvasContext.drawImage(image, position.x, position.y);
}

let Canvas = new Canvas2D();

//Testing
let image = new Image ();
image.src ="./assets/sprites/spr_background4.png";

setTimeout (() => {
    Canvas.drawImage(image, {x:0,y:0});
}, 1000);

