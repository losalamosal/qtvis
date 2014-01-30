var Rect2D = function(x, y, w, h) {
    this.x = x,
    this.y = y,
    this.w = w,
    this.h = h
};

var rects = [];

for (var i=0; i<10; i++) {
	rects[i] = new Rect2D(Math.random(), Math.random(), Math.random(), Math.random());
}

var rectArray = JSON.parse(JSON.stringify(rects))
var rects2 = JSON.parse(rectArray);

console.log("rects:\n", rects);
console.log("JSON:\n", rectArray)
console.log("rects2:\n", rects2);