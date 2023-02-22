var col1 = document.getElementById("col_1");
var col2 = document.getElementById("col_2");
var h3 = document.querySelector("h3");

var angle = document.getElementById("angle");
angle.addEventListener("input",GetAngle)
col1.addEventListener("input",ChangeBackgroundGradient);
col2.addEventListener("input",ChangeBackgroundGradient);
var col1_v;
var col2_v;
var b = document.querySelector("body");
 function GetColor(o)
{
    return o.value;
}

function ChangeBackgroundGradient()
{
    b.style.background = "linear-gradient("+GetAngle() +"deg,"+ GetColor(col1) +","+ GetColor(col2)+")";
    h3.innerHTML = b.style.background.toString();
}

function GetAngle()
{
    return angle.value;
}