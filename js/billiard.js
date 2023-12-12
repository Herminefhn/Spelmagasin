function Canvas2D () {
    this._Canvas = document.getElementById(`screen`);
    this._CanvasContext = this._Canvas.getContext(`2D`);
}

Canvas2D.prototype.clear = function () {
    this._CanvasContext.clearRect (0, 0, this._Canvas.clientWidth, this.canvas.height);
}

Canvas2D.prototype.drawImage = function (image, position) {
    this._CanvasContext.drawImage(image, position.x, position.y);
}