document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    nameInput.addEventListener('input', function() {
        console.log('Name: ' + nameInput.value);
        console.log('Email: ' + emailInputInput.value);
        console.log('Phone: ' + phoneInput.value);
        console.log('Subject: ' + subjectInput.value);
        console.log('Message: ' + messageInput.value);
    });
    nameInput.addEventListener('input', logValue);
    nameInput.addEventListener('change', logValue);

    emailInput.addEventListener('input', logValue);
    emailInput.addEventListener('change', logValue);

    phoneInput.addEventListener('input', logValue);
    phoneInput.addEventListener('change', logValue);

    subjectInput.addEventListener('input', logValue);
    subjectInput.addEventListener('change', logValue);

    messageInput.addEventListener('input', logValue);
    messageInput.addEventListener('change', logValue);

    function logValue(event) {
        console.log(event.target.id + ': ' + event.target.value);
    }
});
