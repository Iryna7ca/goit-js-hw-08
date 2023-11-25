const form = document.querySelector(".feedback-form");
 
form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);

populateForm();

function onFormInput(evt) {
    const emailValue = evt.currentTarget.email.value;
    const messageValue = evt.currentTarget.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify({"email": emailValue, "message": messageValue}));
}

function onFormSubmit(evt) {
    evt.preventDefault();

     console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    form.reset();
    localStorage.removeItem("feedback-form-state");
}

function populateForm() {
    const savedForm = localStorage.getItem("feedback-form-state");
     
    if (savedForm) {
        // console.log(savedForm);
        const parsedForm = JSON.parse(savedForm);
        const emailValue = parsedForm.email;
         const messageValue = parsedForm.message;
        form.email.value = emailValue;
        form.message.value = messageValue;
    }
     
}