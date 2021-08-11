function createGrid(x = 250000){
    const container = document.querySelector(".container");
    while (x!=0){
        container.appendChild(document.createElement('div'));
        x--;
    }
}
createGrid();

const squares = document.querySelectorAll('.container div');
let a =  249500 ,b = 250,c = 249999, d = 0 ;
let a2 = a, b2 = b, c2 = c, d2 = d;

let aX, aY, bX, bY, cX, cY;

aY = Math.round(a/500);
aX = a%500;
bY = Math.round(b/500);
bX = b%500;
cY = Math.floor(c/500);
cX = c%500;

function randThree(){
    return (Math.floor((Math.random() * 3) + 1));
}
function drawPoints(num = 100000){
    let rand;
    let point = 125250;
    let pointY;
    let pointX;
    squares[point].setAttribute("style", "background-color:red;")
    let tempX;
    let tempY;
    for (num; num!=0; num--){
        rand = randThree();
        pointY = Math.floor(point/500);
        pointX = point%500;
        if (rand == 1){
            tempX = Math.round((pointX+aX)*(1/2));
            tempY = Math.round((pointY+aY)*(1/2));
            point = tempY*500+tempX
            squares[point].setAttribute("style", "background-color:blue;")
        }
        if (rand == 2){
            tempX = Math.floor((bX+pointX)*(1/2));
            tempY = Math.round((pointY+bY)*(1/2));
            point = tempY*500+tempX
            squares[point].setAttribute("style", "background-color:blue;")
        }
        if (rand == 3){
            tempX = Math.round((pointX+cX)*(1/2));
            tempY = Math.floor((cY+pointY)*(1/2));
            point = tempY*500+tempX
            squares[point].setAttribute("style", "background-color:blue;")
        }

    }
}

drawPoints();