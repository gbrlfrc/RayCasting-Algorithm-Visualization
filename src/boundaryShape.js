const getShape = (num) => {
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

    if (num == 1) return oneBound;
    else if (num == 2) return twoBound;
    else if (num == 3) return threeBound;
    else if (num == 4) return fourBound;
    else return fiveBound;
}