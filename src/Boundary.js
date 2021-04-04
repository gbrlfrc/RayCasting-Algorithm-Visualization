class Boundary {

    constructor(pt1, pt2){
        this.pt1 = pt1;
        this.pt2 = pt2;
    }

    show(){
        line(this.pt1.x, this.pt1.y, this.pt2.x, this.pt2.y);
    }
}