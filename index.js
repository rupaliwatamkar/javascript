function disp(val)
{
    document.getElementById("result").value+=val
}

function solve()
{
    let x= document.getElementById("result").value
    let y=eval(x)
    document.getElementById("result").value=y
}
function clr()
{
    document.getElementById("result").value=""
}
function backspace()
{
    var i =document.getElementById("result").value;
    document.getElementById("result").value = i.substring(0,i.length -1);
}