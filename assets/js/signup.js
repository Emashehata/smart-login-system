var userName=document.getElementById('userName');
var userEmail= document.getElementById('userEmail');
var userPassword= document.getElementById('userPassword');
var signupForm=document.getElementById('signupForm');
var userData =JSON.parse(localStorage.getItem('users')) || [];
var regex={
    userName:/^[a-z]{2,}\s[a-z]{2,}$/,
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
function searchedUser() {
    var term = userEmail.value; 
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].userEmail=== term) {
            return true;  
        }
    }
    return false;  
}
function clearForm(){
    userName.classList.remove("is-valid");
    userEmail.classList.remove("is-valid");
    userPassword.classList.remove("is-valid");

}

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(vaildation(userName)&&vaildation(userPassword)&&vaildation(userEmail)){
        if(searchedUser()){
            Swal.fire({
                title: "Warning",
                text: "Sorry, This site name is already exist",
                icon: "warning"
              });
        }
        else{
            var userObj={
                userName:userName.value,
                userEmail:userEmail.value,
                userPassword:userPassword.value,
                 
              }
              userData.push(userObj);
              localStorage.setItem('userData',JSON.stringify(userData));           
              Swal.fire({
              title: "Well Done",
              text: "user is added successfully.",
              icon: "success"
              });
        }
    }
    else 
        {
            Swal.fire({
                title: `
                <div class='items d-flex gap-1'>
                 <div class='item item1'></div>
                <div class='item item2'></div>
                <div class='item item3'></div>
                </div><p class='text-black fs-5 mt-3'>Site Name or Url is not valid, Please follow the rules below :</p>`,
                html: `<ol class="rules list-unstyled">
                    <li>
                      <i class="fa-regular fa-circle-right p-2 text-danger"></i>
                      <span class='text-dark'>User name must
                      contain first name and last name</span>
                    </li>
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
            signupForm.reset();
            clearForm();
  });


