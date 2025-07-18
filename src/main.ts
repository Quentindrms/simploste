const form = document.getElementById('form-title') as HTMLFormElement;
const btnSubmit = document.getElementById('btnSubmit');
if(btnSubmit){
btnSubmit.addEventListener('submit', ()=>{submitForm()});
}


function submitForm(){
    console.log('Click')
}