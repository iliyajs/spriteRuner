let display =canvas.element.getContext("2d");
let animEnd=0;
let buttonPress=false;
let reqId;
let properties={}//list of properties that the Global sprite constructor will take
let __spriteProperties=(spriteIMG,id,sX , sY, sWidth , sHeight ,x,y,width,height , totlaSize , frames , stopFrame, speed)=>{
    properties.spriteIMG=spriteIMG;
    properties.id=id;
    properties.sX=sX;
    properties.sY=sY;
    properties.sWidth=sWidth 
    properties.sHeight=sHeight ,
    properties.x=x,
    properties. y=y,
    properties.width=width,
    properties.height=height ,
    properties.totlaSize=totlaSize ,
    properties. frames=frames ,
    properties.stopFrame=stopFrame,
    properties. speed=speed
 
 }
class GlobalSprite{
    //static display=canvas.element.getContext("2d");
    constructor(spriteProperties){
        //spriteIMG,id,sX , sY, sWidth , sHeight ,x,y,width,height , totlaSize , frames , stopFrame, speed
        
       //read file properties 
        this.sHeight=properties.sHeight;
        this.sWidth=properties.sWidth;
        this.sX=properties.sX;
        this.sY=properties.sY;

        //interface output
        this.width=properties.width;
        this.height=properties.height;
        this.x=properties.x;
        this.y=properties.y;

        //sprite animation properties
        this._IMG=properties.spriteIMG;
        this.totlaSize=properties.totlaSize;
        this.frames=properties.frames;
        this.animSpeed=properties.speed;
        this.stopFrame=properties.stopFrame;
        this.startFrame=0;

        this.startX=((self.startFrame*(((this.totlaSize-this.frames*this.sWidth)/(this.frames-1))+this.sWidth)))
        this.frameIndex=1;
        this.currectAnim;
        this.id=properties.id;
        this.self=this;
        this.animationRequestId;
        this.animationLoopId;
        this.animationEnd=true;
        
        
        //this.moveSpeed=1;
        this.lay;

    }

    draw=(self)=>{
        if(self==null){
            self=this;
        }
        display.clearRect(this.x-5,this.y-5,this.width+10,this.height+10)
       display.drawImage(self._IMG , self.sX ,self.sY , self.sWidth , self.sHeight , self.x , self.y ,self.width , self.height);
    }

     animatingBot=(self)=>{
        if(self==null){
            self=this;
        }
        self.sX=((self.frameIndex*(((this.totlaSize-this.frames*this.sWidth)/(this.frames-1))+this.sWidth)));
        if(self.frameIndex==self.stopFrame){
            self.frameIndex=self.startFrame;
           // console.log(self.animationEnd+" "+self.id);
            }
        else{self.frameIndex++;}
    }

 
    stopAnim=(self)=>{
        if(self==null){
            self=this;
        }
        console.log("stop")
       self.sY=0;
       self.frameIndex=4;
       clearTimeout(self.animationLoopId) ;
       cancelAnimationFrame(self.animationRequestId);
       self.animatingBot(self);
       self.draw(self);
    }
}




