export const FormValidate = () => {
  const password: HTMLElement | any = document.getElementById("pass10");
  const confirm_password: HTMLElement | any = document.getElementById("pass20");

  function validatePassword() {
    if (password.value === confirm_password.value) {
    } else {
      confirm_password.setCustomValidity("Passwords Don't Match");
    }
  }
  password.onchange = validatePassword();
  confirm_password.onkeyup = validatePassword();
};
