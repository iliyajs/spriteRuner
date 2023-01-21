//__spriteProperties=(spriteIMG,id,sX , sY, sWidth , sHeight ,x,y,width,height , totlaSize , frames , stopFrame, speed)
//all s variabels are reading file properties , all non s are canvas draw properties 
//stop frame is the last frame of animation 
//frames is amount of frames on your animation
//total size is pixel file size on X dimention 
//speed is time in seconds that your animation suppose to run on , in this case speed= 2 wich means 1 animation loop for 2 seconds
let spriteNo1= new GameObject(__spriteProperties($("#hunter")[0],"ID",0,110,62,100,300,300,64,64,460,6,5,2));
spriteNo1.sY=220;
spriteNo1.render();
spriteNo1.deer="left";
//reconfigure animation settings 
spriteNo1.surfaceSpeedK=20 // cofficent of surface speed . how fast its run over the canvas
spriteNo1.animSpeed=0.5// one animation loop for 0.5 sec 
// the values up here are just make an animation sumuther and avoid a lagi moves 


// colision function is already existing at GameObject class but it's empty ,  here we just editing it 
spriteNo1.colision=()=>{
    if(spriteNo1.x>=canvas.width-spriteNo1.width){
        spriteNo1.sY=110;
        spriteNo1.deer="right";
    }
    if (spriteNo1.x<=spriteNo1.width){
        spriteNo1.sY=220;
        spriteNo1.deer="left";
    }
}
