const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const modal = document.getElementById('myModal');
const contactModal = document.getElementById('contactModal');
const registerModal = document.getElementById('registerModal');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
sessionStorage.setItem('pageNumber',0);

loginButton.addEventListener('click', openModal);
registerButton.addEventListener('click',openRegisterModal)


function openContactModal()
{
    contactModal.display ='block';
    contactModal.style.zIndex = 999;
    modal.style.zIndex=0;
    registerModal.style.zIndex=0;
}

function closeContactModal(){
    contactModal.style.display = 'none'
    contactModal.style.zIndex=0;
}
function openModal() {
    modal.style.display = 'block';
    modal.style.zIndex=999;
}

function closeModal() {
    modal.style.display = 'none';
}

function submitLogin() {
    const loginValue = loginInput.value;
    const passwordValue = passwordInput.value;

    // You can add your login validation logic here
    // For now, let's just log the values to the console
    console.log('Login:', loginValue);
    console.log('Password:', passwordValue);

    // Close the modal after handling the login
    closeModal();
}

function openRegisterModal()
{
    modal.style.zIndex = 0;
    registerModal.style.display = 'block';
    registerModal.style.zIndex = 999;
}
function closeRegisterModal() {
    registerModal.style.display = 'none';
}



// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    
    if (event.target === modal) {
        closeModal();
    }
    else if(event.target === registerModal)
    {
       closeRegisterModal();
    }
});