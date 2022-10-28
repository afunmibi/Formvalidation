function validate(){
    let x = document.forms["formvalidation"]["FullName"].value;
if(x ==""){
    alert("fullname must be filled");
}else{
    alert("Your message has been recorded successfully. Thank you.");
}
}
