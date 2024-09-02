let uname=document.getElementById("username");
let pass=document.getElementById("password");
let cpass=document.getElementById("confirmPassword");
let form=document.querySelector('form');
let btn=document.querySelector('button');

//task 1

uname.insertAdjacentHTML('beforebegin',`<label for="username">Username : </label>`);
pass.insertAdjacentHTML('beforebegin',`<label for="password">Password : </label>`);
cpass.insertAdjacentHTML('beforebegin',`<label for="confirmPassword">confirmPassword : </label>`);

//task 2

// we will use blur eventlistner to do this task

let checkInput = (event) => {
    const errorElement = event.target.parentNode.querySelector('span');
    
    if (event.target.value === "" && !errorElement) {
        const span = document.createElement('span');
        span.className = 'text-danger';
        span.textContent = '*Required';
        event.target.insertAdjacentElement('afterend', span);
    }
    
    if (event.target.value !== "" && errorElement) {
        errorElement.remove();
    }
}


uname.addEventListener('blur',checkInput);
pass.addEventListener('blur',checkInput);
cpass.addEventListener('blur',checkInput);

// uname.setAttribute("required","true");
// pass.setAttribute("required","true");
// cpass.setAttribute("required","true");

//task 3

let match= (event)=>{
    if(event.target.value!==pass.value){
        event.target.insertAdjacentHTML('afterend',`<span class="text-danger" style="background-color:yellow">*Password Should match</span>`)
    }
}
 
cpass.addEventListener('blur',match)

//task 4

// event.preventDefault();   to stopm form to automatically submit
btn.setAttribute('disabled','disabled');
let checkform= (event)=>{
    //event.preventDefault();
    let formfilled=Array.from(document.querySelectorAll('input')).every(input => input.value);
    if(formfilled){
        btn.removeAttribute('disabled')
    }
    else{
        btn.setAttribute('disabled','disabled')
    }

        // if(uname.value=='' || pass.value=='' || cpass.value==''){
    //     btn.setAttribute('disabled','disabled');
    // }
    // else{
    //     btn.removeAttribute('disabled')
    // }

}

form.addEventListener('change',checkform);

//task 5

let checkbtn= (event)=>{
   let c=false;
    if(cpass.value==pass.value){
        c=true;
    }
    if(!c ){
        console.log("not matched")
        alert("Some values are incorrecet");
    }
    else{
       alert("Successfull user registration")
    }
}

btn.addEventListener("click",checkbtn)
