var mouseEvent = "empty";
var last_x, last_y ;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black" ;
w_l = 5;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    curent_x = e.clientX - canvas.offsetLeft;
    curent_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = w_l;

        console.log("Last position of x and y cordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y cordinates = ");
        console.log("x = " + curent_x + "y = " + curent_y);
        ctx.lineTo(curent_x, curent_y);
        ctx.stroke();
    }
last_x = curent_x;
last_y = curent_y;
}
