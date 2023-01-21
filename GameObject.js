class GameObject extends GlobalSprite{
    constructor(options){//options is a list to initialize a GlobalSprite object
        //please future me ! try to incriment the options to one variable
        super(options);
             this.moveReqId;
             this.deer="stand";
            this.surfaceSpeedK=0.8;
            this.moveSet={
                moveUp:(self , k)=>{
                    self.y-=self.animSpeed*k;
                    display.clearRect(this.x , this.y+this.height , this.width, this.height*(self.animSpeed*k/this.height))
                    
                },
            
                moveDown:(self , k)=>{
                    self.y+=self.animSpeed*k;
                    display.clearRect(this.x , this.y , this.width , -this.height*(self.animSpeed*k/this.height))
                },
            
                moveLeft:(self , k )=>{
                    self.x+=self.animSpeed*k;
                    display.clearRect(this.x , this.y , -(self.animSpeed*k/this.height)*this.width , this.height)
                },
        
                moveRight:(self , k )=>{
                    self.x-=self.animSpeed*k;
                    display.clearRect(this.x+this.width, this.y , (self.animSpeed*k/this.height)*this.width ,this.height) 
                }, 
        
                stand:(self , k)=>{
                    self.x-=self.x;
                },
              
            }
    }
    colision=()=>{
        //colision logic 
    }
    controlDeerection=function (self ,k){
        if(self==null){
            self=this;
        }
        switch(self.deer){
            case "up": //self.sY=330;//change the element not for constant 330 but for adaptive variable
           this.moveSet.moveUp(self ,k);
                break;
            case "down": //self.sY=0; 
               
           this.moveSet.moveDown(self, k);
                break;
            case "left": // self.sY=220;
           
            this.moveSet.moveLeft(self, k);
                break;
            case "right": //self.sY=110;
           this.moveSet.moveRight(self , k);
                break;
            case "stand":this.moveSet.stand(self , k)
            //default : this.moveSet.stand(self)
        }  
    }
    
    render=function (self){
        if(self==null){
            self=this;
        }
        self.controlDeerection(self ,this.surfaceSpeedK );
        self.colision();
        self.animatingBot();
        self.draw(self);  

       self.animationLoopId= setTimeout(()=>{
            self.render(self);
        },self.animSpeed*1000/60*self.frames );
        
    }
   


}

