const form = document.getElementById('post-form');
const firstname = document.getElementById('fname');
const email = document.getElementById('email');
// const subject = document.getElementById('subject');
const comments = document.getElementById('comment');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    // const subjectValue = subject.value.trim();
    const commentsValue = comments.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'Name is required');
    } else {
        setSuccess(firstname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // if(subjectValue === '') {
    //     setError(subject, 'Subject is required');
    // } else {
    //     setSuccess(subject);
    // }

    if(commentsValue === '') {
        setError(comments, 'Comment is required');
    } else {
        setSuccess(comments);
    }

};
