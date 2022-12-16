import { useNavigate } from "react-router";
export function FormValidate(){
  const navigate = useNavigate();
  const navLogin = () => {
    navigate('/login');
  };
    const password: HTMLElement | any = document.getElementById('pass10');
    const confirm_password: HTMLElement | any = document.getElementById('pass20');
  function validatePassword(){
    if(password.value === confirm_password.value) {
      return{navLogin};
    } else {
      confirm_password.setCustomValidity("Passwords Don't Match");
    }


  } 
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword; 
}  