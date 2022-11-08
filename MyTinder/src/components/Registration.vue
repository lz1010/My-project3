<template>
  <section>
    <div style="display: flex; justify-content: center; align-items:center;" class="">
      <form class="form" action='' method='POST'>
        <input placeholder="Имя" type='text'/>
        
        <input placeholder="Пароль"  id='Password' :type='PasswordType'/>
        <button type="button" id='FirstPasswordButton' @click='changePasswordType' class="btn btn-light">{{ showPasswordText }}</button>

        <input placeholder="Повторите пароль" id='AnotherPassword' :type='AnotherPasswordType'/> 
        <button type="button" @click='changePasswordType' id='SecondPasswordButton' class="btn btn-light"> {{ showAnotherPasswordText }}</button>

        <router-link type='submit' class="btn btn-success submitButton" to="/Main">Войти</router-link>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
      let PasswordType = ref('password')
      let AnotherPasswordType = ref('password')
      let showPasswordText = ref('Показать пароль')
      let showAnotherPasswordText = ref('Показать пароль');

      function changePasswordType(e) {
        if(e.target.id == 'FirstPasswordButton') {
          if(PasswordType.value == 'password') {
            PasswordType.value = 'text'
            showPasswordText.value  = 'Спрятать пароль'
          }
          else {
            PasswordType.value = 'password'
            showPasswordText.value  = 'Показать пароль'
          }
        }
        if(e.target.id == 'SecondPasswordButton') {
          if(AnotherPasswordType.value == 'password') {
            AnotherPasswordType.value = 'text'
            showAnotherPasswordText.value = 'Спрятать пароль'
          }
          else {
            AnotherPasswordType.value = 'password'
            showAnotherPasswordText.value  = 'Показать пароль'
          }
        }
      }  

      return {
        PasswordType,
        AnotherPasswordType,
        changePasswordType,
        showPasswordText,
        showAnotherPasswordText
      }
    },
}
</script>

<style scoped>
section {
  background-color: #e0e0e0;
  height: 100vh;
  display: flex; 
  justify-content:center; 
  align-items:center;
}

input {  
  margin-right: 10px;
  margin-left: 10px;
  padding: 15px;
  border: none;

  border-radius: 30px;
  background: #e0e0e0;
  box-shadow:  3px 3px 12px 5px #bebebe,
            -3px -3px 12px 5px #ffffff;
  transition: all 0.2s
}

input:focus {
  background: var(--bs-btn-hover-border-color);
  box-shadow:  3px 3px 12px 5px #ffffff,
            -3px -3px 12px 5px #bebebe;
  outline: none
}

button {
  margin-right: 10px;
  border-radius: 30px;
  border: none;
  background: #e0e0e0;
  box-shadow:  3px 3px 10px 1px #bebebe,
            -3px -3px 10px 1px #ffffff;

}

button:active {
  box-shadow:  3px 3px 10px 1px #ffffff, -3px -3px 10px 1px #bebebe;   
}

.submitButton {
  border: none;
  background: #e0e0e0;
  box-shadow:  3px 3px 10px 1px #bebebe,
            -3px -3px 10px 1px #ffffff;
  color: black
}

.form {
  padding-top: 50px; 
  padding-bottom: 50px; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 510px; 
  align-items: center; 
  width: 400px; 

  border-radius: 40px;
  background: #e0e0e0;
  box-shadow:  21px 21px 50px #bebebe,
             -21px -21px 50px #ffffff;
}
</style>
