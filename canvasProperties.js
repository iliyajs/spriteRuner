let canvas={
    element: $("#canvas")[0],
    width:$(window)[0].innerWidth/2,
    height:$(window)[0].innerHeight*0.8,
    resize: function(){
        canvas.element.width=canvas.width;
        canvas.element.height=canvas.height;
        canvas.width=$(window)[0].innerWidth/2;
        canvas.height=$(window)[0].innerHeight*0.8;
    }
};
$(window).on("resize",()=>canvas.resize());
$(window).on("load",()=>canvas.resize());

