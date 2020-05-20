
if (getCookie('who')=='child')
{
    setTimeout("location.href='getegg.html'",4000);
}
else if(getCookie('who')=='parent')
{
    setTimeout("location.href='layegg.html'",4000);
}


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
