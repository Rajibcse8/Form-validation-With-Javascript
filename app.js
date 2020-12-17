const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');


function showerror(input, massege) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = massege;
}


function showsucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    //const small = formControl.querySelector('small');

}



//Email  Validation

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Event litsener 
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showerror(username, 'Username is Required');
    } else {
        showsucess(username);
    }

    if (email.value === '') {
        showerror(email, 'Email is Required');
    } else if (!isValidEmail(email.value)) {
        showerror(email, 'valid is Required');
    }

    if (pass1.value === '') {
        showerror(pass1, 'Password is Required');
    }

    if (pass2.value === '') {
        showerror(pass2, 'Confirm  password is Required');
    }

    if (pass2.value != pass1.value) {
        showerror(pass2, 'password doent match ');
    }


})