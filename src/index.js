const windowDim = {
    height : window.innerHeight,
    width : window.innerWidth
}
let ray;
let walls = [];
let boundary = [];

const update = () => {
    while (walls.length>0){
        walls.pop();
        boundary.pop();
    }
    document.getElementById('number').textContent = document.getElementById('slider').value;
    setup();
}

function setup() {
    createCanvas(windowDim.width, windowDim.height);

    const shape = getShape(document.getElementById('slider').value);
    for (let boundCoord of shape){
        walls.push(boundCoord);
        boundary.push(new Boundary(boundCoord.pt1, boundCoord.pt2));
    }
    walls.push(new Boundary({x: 0, y: 0}, {x: windowDim.width, y: 0}));
    walls.push(new Boundary({x: windowDim.width, y: 0}, {x: windowDim.width, y: windowDim.height}));
    walls.push(new Boundary({x: windowDim.width, y: windowDim.height}, {x: 0, y: windowDim.height}));
    walls.push(new Boundary({x: 0, y: windowDim.height}, {x: 0, y: 0}));
}
  
function draw() {
    background(0);
    stroke(255);
    const rayCoord = {
        x : mouseX,
        y : mouseY,
    }
    ray = new Ray(rayCoord);
    for (let bound of boundary){bound.show();}
    ray.look(walls);
    ray.show();
}