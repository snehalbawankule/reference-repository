export function validate(){
  const password: HTMLElement | any = document.getElementById('pass10');
  const confirm_password: HTMLElement | any = document.getElementById('pass20');
  
  function validatePassword(){
    if(password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword; 
}  