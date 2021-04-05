const windowDim = {
    height : window.innerHeight,
    width : window.innerWidth
}
let ray;
let walls = [];
let boundary = [];
const opt= {
    shape : 'boundary',
    bound : 2 
}
const offset= {x:0.0,y:0.0}

const update = () => {

    while (walls.length>0){
        walls.pop();
        boundary.pop();
    }
    for (let el of document.getElementsByName('shape')){
        if (el.checked){
            if (el.value !== 'boundary' && el.value !== 'random'){
                document.getElementById('slider').disabled = true;
                opt.shape = el.value;
                opt.bound = null;
            }else {
                document.getElementById('slider').disabled = false;
                opt.shape = el.value;
                opt.bound = document.getElementById('slider').value;
            }
        }
    }
    document.getElementById('number').textContent = document.getElementById('slider').value;
    setup();
}

function setup() {

    createCanvas(windowDim.width, windowDim.height);

    const shape = getShape(opt);
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
    ////////////////////////////////////////// perline noise movement
    // offset.x+=0.01;
    // offset.y+=0.01;
    // const rayCoord = {
    //     x : noise(offset.x)*windowDim.width,
    //     y : noise(offset.y)*windowDim.height,
    // }
    //////////////////////////////////////// mouse movement
    const rayCoord = {
        x : mouseX,
        y : mouseY,
    }
    ///////////////////////////////////////
    ray = new Ray(rayCoord);
    for (let bound of boundary){bound.show();}
    ray.look(walls);
    ray.show();
}