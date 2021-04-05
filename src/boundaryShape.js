const getShape = (opt) => {
    const oneBound  = [{
        pt1 : { x : (windowDim.width/10)*3, y : windowDim.height/2},
        pt2 : { x : (windowDim.width/10)*7, y : windowDim.height/2}   
    }];

    const twoBound = [{
        pt1 : { x : (windowDim.width/10)*2, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*2, y : (windowDim.height/10)*7}  
    }, 
    {
        pt1 : { x : (windowDim.width/10)*8, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*8, y : (windowDim.height/10)*7}  
    }];

    const threeBound = [{
        pt1 : { x : (windowDim.width/10)*4, y : (windowDim.height/10)*2},
        pt2 : { x : (windowDim.width/10)*3, y : (windowDim.height/2)}  
    },
    {
        pt1 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*2},
        pt2 : { x : (windowDim.width/10)*7, y : (windowDim.height/2)}  
    },
    {
        pt1 : { x : (windowDim.width/10)*4, y : (windowDim.height/10)*7},
        pt2 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*7}  
    }]; 

    const fourBound = [{
        pt1 : { x : (windowDim.width/10)*3, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*3, y : (windowDim.height/10)*7}  
    },
    {
        pt1 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*7}  
    },
    {
        pt1 : { x : (windowDim.width/10)*4, y : (windowDim.height/10)*2},
        pt2 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*2}  
    },
    {
        pt1 : { x : (windowDim.width/10)*4, y : (windowDim.height/10)*8},
        pt2 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*8}  
    }];

    const fiveBound = [{
        pt1 : { x : (windowDim.width/10)*4, y : (windowDim.height/10)*1},
        pt2 : { x : (windowDim.width/10)*2, y : (windowDim.height/10)*4}  
    },
    {
        pt1 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*1},
        pt2 : { x : (windowDim.width/10)*8, y : (windowDim.height/10)*4}  
    },
    {
        pt1 : { x : (windowDim.width/10)*2, y : (windowDim.height/10)*5},
        pt2 : { x : (windowDim.width/10)*2, y : (windowDim.height/10)*8}  
    },
    {
        pt1 : { x : (windowDim.width/10)*8, y : (windowDim.height/10)*5},
        pt2 : { x : (windowDim.width/10)*8, y : (windowDim.height/10)*8}  
    },
    {
        pt1 : { x : (windowDim.width/10)*3, y : (windowDim.height/10)*8},
        pt2 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*8}  
    }];
    const rect = [{
        pt1 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*7}  
    },
    {
        pt1 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*3}  
    }, 
    {
        pt1 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*7}  
    }, 
    {
        pt1 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*7},
        pt2 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*7}  
    }];
    const angle=[{
        pt1 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*7}  
    },
    {
        pt1 : { x : (windowDim.width/10)*6, y : (windowDim.height/10)*3},
        pt2 : { x : (windowDim.width/10)*7, y : (windowDim.height/10)*3}  
    }];

    if (opt.shape === 'boundary'){
        if (opt.bound == 1) return oneBound;
        else if (opt.bound == 2) return twoBound;
        else if (opt.bound == 3) return threeBound;
        else if (opt.bound == 4) return fourBound;
        else return fiveBound;    
    }else if (opt.shape === 'rectangle'){
        return rect;
    }else if (opt.shape === 'random'){
        const r = [];
        for (let i=0; i< opt.bound; i++){
            r.push({
                pt1:{x: random(window.innerWidth), y: random(window.innerHeight)},
                pt2:{x: random(window.innerWidth), y: random(window.innerHeight)}
            })            
        }
        return r;
    }else {
        return angle;
    }
}