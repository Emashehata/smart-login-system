var userName = localStorage.getItem('loggedInUser');
var btnLogout=document.getElementById('btnLogout');
document.getElementById('welcomeMessage').textContent = `Welcome, ${userName}!`;
btnLogout.addEventListener('click',function(){
    window.location.href = 'index.html';
})