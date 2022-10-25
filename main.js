let chrisayuron=''
let mail=/[a-zA-Z0-9!#$%^&*()_=+}{.<>|:"]+@+(dominio.com)/
let tel=/^[3][0-9]{9}$/
let registrar=document.querySelector('#Registrar')
let nombre=document.querySelector('#nombre')
let apellido=document.querySelector('#apellido')
let email=document.querySelector('#email')
let telefono=document.querySelector('#telefono')


const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))



registrar.addEventListener('click', (e)=>{
    e.preventDefault()
    
    if (nombre.value==''|| nombre.value.length>50 ||apellido.value=='' || apellido.value.length>50 ||(mail.test(email.value)==false) || (tel.test(telefono.value)==false)) 
    alert('Algun dato esta incorrecto')
    else{
        document.querySelector('.registered').style.display='flex'
        let registro=document.querySelector('.registered')
        console.log('@By Chrisayuron')
        registro.innerHTML+=`
        <ul class="list-group col-lg-4 col-sm-12">
            <li class="list-group-item"><strong>Nombre:</strong> ${nombre.value}</li>
            <li class="list-group-item"><strong>Apellido:</strong> ${apellido.value}</li>
            <li class="list-group-item"><strong>Email:</strong> ${email.value}</li>
            <li class="list-group-item"><strong>Telefono:</strong> ${telefono.value}</li>
            
          </ul>
          `
        myModal.hide()
        nombre.value=''
        apellido.value=''
        email.value=''
        telefono.value=''
        
    }
    
    
})
