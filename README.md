# spriteRuner
this bunch of js files are build for make me create an infinity sprites that run independency on one canvas element  . this bunch of files are the core , my final goal is develop a flexible tool to easyly create a basic 2d games based on canvas


the core is built of :
    __spriteProperties , it's a function that set a main properties of sprite : 
        there is an object that contain the information about the sprite that would be created , named properties {};
         __spriteProperties is changing it's variable values .
         the values are :
              IMG: contains a sprite image , i use it with html element like : $("#imageId")[0];
              id: the name of ur sprite , now is usless but may be at future would have a goal , like array.searchObjectById("objectID");
              sX : x starting pixel of reading the image ; usual it would be 0 , bcz its value is mathemathicly calculates in the sprite runner
              sY : y starting pixel of reading the image ; same as x unless u wanna change it to some another constant  .
              sWidth : the width of one shot in the sprite original image ;
              sHeight : same as sWidth ;
              x and y: position on the canvas;
              width and height : scale on the canvas ;
              totalSize: the size of the original image on x dimantion ;
              frames : the amount of frames in one animation loop ; 
              stop frame : is the last frame on your animation ; starts counting from 0;
             speed : seconds that animation should run ;
             there is secretly start frame variable is always 0 ; unless u change it like : spriteObjectName.startFrame after initiate an sprite object;
             
             
             
   class GlobalSprite {}:
        its a class that contain the information about the sprite and manipulate it to run a sprite this class have a bunch of functions that controlling the animation           proces :
              draw(): 
                  this function is just draw correct frame that its reads from , sX , sY , sWidth and sHeight area from the original sprite image and place it on                          coorect position on canvas element ;
                   then clear it self from the canvas .
              animatingBot(): 
                  this function is change proportionaly the sX value and switch the frames .
              stopAnim(): 
                    this function is clears animations loop and stops the sprite animation in aditional to clear the animation timeouts its redraw the first frame of                       the animation how ever this option may be adited by delete drew call on this function .
                    
    class GameObject is extended from global sprite but its goal is contain controllig functions :
               game object controlling the sprite it atached to , 
               in the base it have a moveSet object that contains your standart move functions and standart behavior logic of an object ;
               and controlDeerection() : 
                        this function contains a trigers for your moves functions : for example in the base it contain 
                                  switch(self.deer){
                                      case "up": //self.sY=330;//change the element not for constant 330 but for adaptive variable change animation loop 
                                            this.moveSet.moveUp(self ,k);
                                             break;
                                       case "down": //self.sY=0; 
                                           this.moveSet.moveDown(self, k);
                                           k is surface speed coffisient ;
                                           
                render():
                    this function start the animation loop ; the loop id is contained on animatioLoopId variable that initialise a timeOut , if you dont want to use stop anim function just use : clearTimeout(object.animationLoopId ) , just standart ls timeout loop .
                    

                
    
   
   
   
                   
                  
        
        
             
             
             
              
