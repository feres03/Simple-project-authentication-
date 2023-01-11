function register() {
    var user = JSON.parse(localStorage.getItem('users')) || []
    console.log(user);
    var nom = document.getElementById('Nom')
    var prenom = document.getElementById('Prenom')
    var email = document.getElementById('Email')
    var password = document.getElementById('Password')
    var password2 = document.getElementById('Password2')
    var validForm = true;
    if (nom.value == '') {
        nom.classList.add('is-invalid')
        nom.classList.remove('is-valid')

        validForm = false
    }
    else {
        nom.classList.add('is-valid')
        nom.classList.remove('is-invalid')


    }

    if (prenom.value == '') {
        prenom.classList.add('is-invalid')
        prenom.classList.remove('is-valid')
        validForm = false
    }
    else {
        prenom.classList.add('is-valid')
        prenom.classList.remove('is-invalid')

    }

    if (email.value == '') {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        validForm = false
    }
    else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }

    if (password.value == '') {
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
        document.getElementById('pwd').innerHTML = 'Le password est obligatoire'
        validForm = false
    }
    else {
        password.classList.add('is-valid')
        password.classList.remove('is-invalid')
        document.getElementById('pwd').innerHTML = ''
    }
    if (password.value.length > 0 && password.value.length <= 8) {
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
        validForm = false
        document.getElementById('pwd').innerHTML = 'Le password est trop court'
    } 


    if ((password.value != password2.value) || ((password.value.length == 0) && (password2.value.length == 0))) {
        password2.classList.add('is-invalid')
        password2.classList.remove('is-valid')

        validForm = false
    }
    else {
        password2.classList.add('is-valid')
        password2.classList.remove('is-invalid')

    }
    if (validForm) {
        var data = {
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            password: password.value,
        }
        console.log(data);
        user.push(data)
        console.log(user);
        localStorage.setItem('users', JSON.stringify(user))
        window.location.href = 'login.html';
    }
}
