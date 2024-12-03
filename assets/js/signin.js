var userEmail= document.getElementById('userEmail');
var userPassword= document.getElementById('userPassword');
var signinForm= document.getElementById('signinForm');
 
var userData = JSON.parse(localStorage.getItem('userData'))||[];

var regex={
    userEmail:/^[a-z0-9]{2,}@gmail.com$/,
    userPassword:/^[a-z0-9]{3,}$/,
}
function vaildation(input){
    if(regex[input.id].test(input.value))
    {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else 
    {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}
function clearForm(){
    userEmail.classList.remove("is-valid");
    userPassword.classList.remove("is-valid");

}
var index;
function searchedUser() {
    var userMail = userEmail.value; 
    var userPass= userPassword.value;
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].userEmail=== userMail&&userData[i].userPassword=== userPass) {
            index=i;
            return true;  
        }
    }
    return false;  
}
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(vaildation(userPassword)&&vaildation(userEmail)){
        
        if (searchedUser()) {
          localStorage.setItem('loggedInUser', userData[index].userName);
          window.location.href = 'home.html';
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invaild Email or Password",
              });
        }
    }
    else{
        Swal.fire({
            title: `
            <div class='items d-flex gap-1'>
             <div class='item item1'></div>
            <div class='item item2'></div>
            <div class='item item3'></div>
            </div><p class='text-black fs-5 mt-3'>Site Name or Url is not valid, Please follow the rules below :</p>`,
            html: `<ol class="rules list-unstyled">
                <li>
                  <i class="fa-regular fa-circle-right p-2 text-danger"></i><span class='text-dark'>User Email must contain at least two charchter followed by digits and gmail.com
                  </span>
                </li><li>
                  <i class="fa-regular fa-circle-right p-2 text-danger"></i><span class='text-dark'>User Password must contain only charchter and digits and not less than 5 charchter
                  </span>
                </li></ol>`,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
          });
    }
    signinForm.reset();
    clearForm();
  });
 

