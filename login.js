function login(){
    var email1 = document.getElementById('email')
    var password1 = document.getElementById('password')

    var users = JSON.parse(localStorage.getItem('users')) || []
    var found = users.find(user => user.email == email1.value && user.password==password1.value)
console.log(found)
if (found) {
    window.location.href = 'dashboard.html'
} else {
    alert('mdp ou email incorrect!')
}
}