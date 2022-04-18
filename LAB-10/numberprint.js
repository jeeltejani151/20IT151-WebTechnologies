function get_numupto_n()
{
    let n=prompt("Enter number");
    n=parseInt(n);
    let a="";
    for(var i=1;i<=n;i++)
    {
        a+=i + "<br>";
    }
    document.getElementById("num").innerHTML = a;

}