function get_fibonacci() {
    let n = prompt("Enter Number");
    n = parseInt(n);
    let ans = "";
    let n1 = 0,
        n2 = 1,
        next;
    next = n1 + n2;
    ans += n1 + " " + n2 + " ";

    while (next <= n) {
        ans += next + " ";
        n1 = n2;
        n2 = next;
        next = n1 + n2;
    }
    document.getElementById('no').innerHTML = n;
    document.getElementById('print').innerHTML = ans;
}