var canvas;
var music;
var b1,b2, b3,b4
var ball ;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1= createSprite(0,580,360,30);
    b1.shapeColor="blue";

    b2= createSprite(295,580,200,30);
    b2.shapeColor="green";

    b3= createSprite(515,580,200,30);
    b3.shapeColor="orange";

    b4= createSprite(740,580,220,30);
    b4.shapeColor="brown";

    ball= createSprite(random(20,750),100,40,40);
    ball.shapeColor="white";
    ball.velocityX=random(3,7);
    ball.velocityY=random(5,10);

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges=createEdgeSprites();
ball.bounceOff(edges);

if(b1.isTouching(ball)&& ball.bounceOff(b1)){
ball.shapeColor="blue"
music.play();
}


if(b2.isTouching(ball)){
    ball.shapeColor="green"
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
    }

    if(b3.isTouching(ball)&& ball.bounceOff(b3)){
        ball.shapeColor="orange"
        music.play();
        }

        if(b4.isTouching(ball) && ball.bounceOff(b4)){
            ball.shapeColor="brown"
            music.play();
            }


    //add condition to check if box touching surface and make it box
drawSprites();
}
