// const btnBuy = document.querySelector('#btnBuy');

// // Get the input fields
// var name1 = document.querySelector('#name');
// var lastName = document.querySelector('#lastName');
// var email = document.querySelector('#email');
// var password1 = document.querySelector("#password");
// var address = document.querySelector("#address");
// var phone = document.querySelector('#phone');

// // Get the error elements
// const errorForm = document.querySelector('#formId')
// const completForm = document.querySelector('#formcomplet')

// eventlistener();
// function eventlistener(){
//     // document.addEventListener(`DOMContentLoaded`, inApp);
//     //Campos formulario
//     name1.addEventListener(`blur`,validate);
//     lastName.addEventListener(`blur`,validate);
//     email.addEventListener(`blur`,validate);
//     password1.addEventListener(`blur`,validate);
//     address.addEventListener(`blur`,validate);
//     phone.addEventListener(`blur`,validate);
    
// }

// // function inApp(){
// //     // btnBuy.disabled=true; 
// // }

// // Exercise 8
// function validate(e) {
//     console.log(e.target.value);
//     console.log(e.target.type);
//     //Todos los campos han de tener almenos 3 carácteres
//     if(e.target.value.length > 2){
//         //Eliminar errores
//         const removeError = document.querySelector('p.error');
//         if(removeError){
//             removeError.remove(); 
//         }    
//         e.target.classList.remove('borderColorRed')
//         e.target.classList.add('borderColorGreen')  
//     }else{ 
//         e.target.classList.remove('borderColorGreen')    
//         e.target.classList.add('borderColorRed')
//         setError(`Numbers are not valid`);
//     }

//     //Nombre y apellido solo letras
//     if(e.target.type === 'text'){
//       console.log("Letras")
//       if(parseInt(e.target.value)){
//       console.log("resultado")

//       }
//     }else{
//        console.log(" No Letras")
        
//     }
//     //Teléfono solo números
//     if(e.target.type === 'number'){

//     }
//      //Contraseña números y letras
//      if(e.target.type === 'password'){

//     }
   
//     //Formato email
//     if(e.target.type === 'email'){
//         //Expresión Regular
//         const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(er.test(e.target.value)){
//             console.log("email Valido");
//              //Eliminar errores
//              const removeError = document.querySelector('p.error');
//              if(removeError){
//                 removeError.remove(); 
//             }        
//              e.target.classList.remove('borderColorRed')
//              e.target.classList.add('borderColorGreen')
//         }else{  
//             console.log("email NO Valido");
//             e.target.classList.remove('borderColorGreen')    
//             e.target.classList.add('borderColorRed')
//             setError(`Enter a correct email`);
//         }
//     }


//     if(name1.value !== '' && lastName.value !== '' && email.value !== '' && password1.value !== '' && address.value !== '' && phone.value !== ''){
//     //    console.log(`Todos campos completos`)
//        completedFields(e);     
//     }else{
//     //    console.log(`Campos Incompletos`)
//        setError(`All fields are required`);
//     }
 
// }

// function setError(errorText){   
//     // errorForm.reset();
//     const mensajeError = document.createElement(`p`);
//     mensajeError.textContent=errorText;
//     mensajeError.classList.add(`error`);
   
//     const existError = document.querySelectorAll(`.error`);
//     if(existError.length === 0){
//         errorForm.appendChild(mensajeError); 
//     }
// }

// function  completedFields(e){
// e.preventDefault();
// console.log(`Campos completados`)
//     //Mensaje todos los campos completados
//     const mComplet = document.createElement(`p`);
//     mComplet.textContent=`All fields completed`;
//     mComplet.classList.add(`complet`);
//     completForm.appendChild(mComplet);

// setTimeout(() => {  
//     mComplet.remove();
//     btnBuy.disabled=false;
// },3000);
//  }

//=========================2TIPO================================================

//Expresiones regulares
const er = {
	password2: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const selectform = document.getElementById('formMain');
const inputs = document.querySelectorAll('#formMain input');
const errorForm = document.querySelector('#formId');
const completForm = document.querySelector('#formcomplet');

// Exercise 8  - Validar inputs
const validate=(e) =>{
    switch (e.target.id){
        case "name":
          if(er.name.test(e.target.value) && (e.target.value.length > 2)){
            document.getElementById(`name`).classList.remove(`formInput_incorrecto`);
            document.getElementById(`name`).classList.add(`formInput_correcto`);
            document.querySelector(`#inputErrorName`).classList.remove(`formError-activo`);
        }else{
            document.getElementById(`name`).classList.add(`formInput_incorrecto`);
            document.querySelector(`#inputErrorName`).classList.add(`formError-activo`);
          }
        break;

        case "lastName":  
            if(er.name.test(e.target.value ) && (e.target.value.length > 2)){
                document.getElementById(`lastName`).classList.remove(`formInput_incorrecto`);
                document.getElementById(`lastName`).classList.add(`formInput_correcto`);
                document.querySelector(`#inputErrorLast`).classList.remove(`formError-activo`);
            }else{
            document.getElementById(`lastName`).classList.add(`formInput_incorrecto`);      
            document.querySelector(`#inputErrorLast`).classList.add(`formError-activo`);      
        }
          break;

          case "email":    
            if(er.email.test(e.target.value) && (e.target.value.length > 2)){
                document.getElementById(`email`).classList.remove(`formInput_incorrecto`);
                document.getElementById(`email`).classList.add(`formInput_correcto`);
                document.querySelector(`#inputErrorEmail`).classList.remove(`formError-activo`);
            }else{
            document.getElementById(`email`).classList.add(`formInput_incorrecto`);    
            document.querySelector(`#inputErrorEmail`).classList.add(`formError-activo`);      
        }
          break;

          case "password":
            if(er.password2.test(e.target.value) && (e.target.value.length > 2) ){
                document.getElementById(`password`).classList.remove(`formInput_incorrecto`);
                document.getElementById(`password`).classList.add(`formInput_correcto`);
                document.querySelector(`#inputErrorPass`).classList.remove(`formError-activo`); 
            }else{
            document.getElementById(`password`).classList.add(`formInput_incorrecto`);    
            document.querySelector(`#inputErrorPass`).classList.add(`formError-activo`);    
        }
          break;

          case "address":   
            if(er.name.test(e.target.value) && (e.target.value.length > 2)){
                document.getElementById(`address`).classList.remove(`formInput_incorrecto`);
                document.getElementById(`address`).classList.add(`formInput_correcto`);
                document.querySelector(`#inputErrorAddress`).classList.remove(`formError-activo`);
            }else{
            document.getElementById(`address`).classList.add(`formInput_incorrecto`);   
            document.querySelector(`#inputErrorAddress`).classList.add(`formError-activo`);   
        }
          break;

          case "phone":
            if(er.phone.test(e.target.value) && (e.target.value.length > 2)){
                document.getElementById(`phone`).classList.remove(`formInput_incorrecto`);
                document.getElementById(`phone`).classList.add(`formInput_correcto`);
                document.querySelector(`#inputErrorPhone`).classList.remove(`formError-activo`);  
            }else{
            document.getElementById( `phone`).classList.add(`formInput_incorrecto`);  
            document.querySelector(`#inputErrorPhone`).classList.add(`formError-activo`);    
        }
          break;   
    }
}

//Escuchar acción en inputs
inputs.forEach((e) => {
    e.addEventListener(`keyup`, validate);
    e.addEventListener(`blur`, validate);
    });

    //Escuchar botón buy
selectform.addEventListener(`submit`, (e) => {
    e.preventDefault();
    if( name.value !== '' && lastName.value !== '' && email.value !== '' && password.value !== '' && address.value !== '' && phone.value !== ''){
         completedFields();
    }else{
         setError();
    }
});

//Mensaje campos Incompletados
function setError(){   
    const mensajeError = document.createElement(`p`);
    mensajeError.textContent=`All fields are required`;
    mensajeError.classList.add(`error`);
   
    const existError = document.querySelectorAll(`.error`);
    if(existError.length === 0){
        errorForm.appendChild(mensajeError); 
    }
}

//Mensaje todos los campos completados
function  completedFields(){
    if(errorForm){
        errorForm.remove();
    }
    const mComplet = document.createElement(`p`);
    mComplet.textContent=`All fields completed`;
    mComplet.classList.add(`complet`);
    completForm.appendChild(mComplet);

    setTimeout(() => {  
    mComplet.remove();  
    location.reload();
},3000);
}