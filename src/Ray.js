class Ray{

    constructor(rayPt){
        this.rayPt = rayPt;
        this.rayDir = [];
        for (let angle=0; angle<360; angle+=1)
          this.rayDir.push(p5.Vector.fromAngle(angle));
    }

    show(){
        stroke(255);
        circle(this.rayPt.x, this.rayPt.y, 10);
        for (let dir of this.rayDir){
          line(
            this.rayPt.x,
            this.rayPt.y,
            this.rayPt.x+dir.x,
            this.rayPt.y+dir.y);
        }
    }

    look(walls){
        for (let i=0;i<this.rayDir.length; i++){
            const distance={
                record : Infinity,
                closest : null
            }
            for (let wall of walls){
                const intersectionPt=this.intersect(wall, this.rayDir[i]);
                if (intersectionPt){
                    const d = dist(this.rayPt.x, this.rayPt.y, intersectionPt.x, intersectionPt.y);
                    if (d<distance.record){
                        distance.record=d;
                        distance.closest=intersectionPt;
                    }
                }
            }
            if (distance.closest) line(this.rayPt.x, this.rayPt.y, distance.closest.x, distance.closest.y);
        }
    }

    intersect(bound, rayDir){
        const x1 = bound.pt1.x; 
        const y1 = bound.pt1.y;
        const x2 = bound.pt2.x;
        const y2 = bound.pt2.y;

        const x3 = this.rayPt.x;
        const y3 = this.rayPt.y;
        const x4 = this.rayPt.x + rayDir.x;
        const y4 = this.rayPt.y + rayDir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) { return; }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
            const pt = {
                x : x1 + t * (x2 - x1),
                y : y1 + t * (y2 - y1)
            }
            return pt;
        } else { return; }

    }
}