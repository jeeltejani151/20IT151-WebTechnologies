const text = ["Mahesh","Manday", "Jeel", "Surat", "BMbajva","Madasy"];
document.getElementById("array").innerHTML = "Array : " + text;
let pattern = /^[M].[d][a-zA-z0-9!@#$%^&*(){}<>]*[y]$/;
let ans = "Matched Word: ";
for(let i=0;i<text.length;i++)
{
    let result = pattern.test(text[i]);
    if(result == true)
    {
        ans = ans + text[i] + " ";
    }
}
document.getElementById("match").innerHTML = ans;