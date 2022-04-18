function check_validation(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    
    let flag=true;
    document.getElementById('err_email').style.display = 'none';
    document.getElementById('err_pass').style.display = 'none';
    
    if(email == '')
    {
        document.getElementById('err_email').style.display = 'inline-block';
        flag=false;
    }
    
    if(pass == '')
    {
        document.getElementById('err_pass').style.display = 'inline-block';
        flag=false;
    }
    return flag;
}