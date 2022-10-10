var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d")
var last_position_of_x,last_position_of_y;
var width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color");
 mouseevent="mouseDown"   
}

    ctx.beginPath();
    ctx.strokestyle = "grey";
    ctx.lineWidth = 1;
    ctx.rect(150,143,430,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc (250,210,40,0,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokestyle = "black";
    ctx.lineWidth = 5;
    ctx.arc (350,210,40,0,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc (450,210,40,0,2 * Math.PI) ;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc (300,250,40,0,2 * Math.PI) ;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.linewidth = 5;
    ctx.arc (400,250,40,0,2*Math.PI) ;
    ctx.stroke();