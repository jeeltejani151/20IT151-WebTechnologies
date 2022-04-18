function check_validation() {
    const email = document.getElementById('email').value;
    const PhoneNumber = document.getElementById('PhoneNumber').value;
    const ZipCode = document.getElementById('ZipCode').value;
    const creditcard = document.getElementById('creditcard').value;
    let flag = true;
    document.getElementById('err_email').style.display = 'none';
    document.getElementById('err_email_1').style.display = 'none';
    document.getElementById('err_phone').style.display = 'none';
    document.getElementById('err_phone_1').style.display = 'none';
    document.getElementById('err_Zip').style.display = 'none';
    document.getElementById('err_cred').style.display = 'none';


    var pattern = /^[A-Z a-z._]@[A-Z a-z][.][[A-Z a-z]$/;
    var p=/^\d{10}$/;
    var z=/^\d{6}$/;
    var c=/^\d{14}$/;
    
    if (email == '') {
        document.getElementById('err_email').style.display = 'inline-block';
        flag = false;
    }
    else if (!pattern.test(email)) {
        document.getElementById('err_email_1').style.display = 'inline-block';
        flag = false;
    }

    if(PhoneNumber=='')
    {
        document.getElementById('err_phone_1').style.display = 'inline-block';
        flag=false;

    }
    else if(!p.test(PhoneNumber))
    {
        document.getElementById('err_phone').style.display = 'inline-block';
        flag=false;
    }
    if (!z.test(ZipCode)) {
        document.getElementById('err_Zip').style.display = 'inline-block';
        flag = false;
    }
    if (!c.test(creditcard)) {
        document.getElementById('err_cred').style.display = 'inline-block';
        flag = false;
}
    return flag;
}