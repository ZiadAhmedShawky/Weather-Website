console.log('Client side is loaded');

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#message-1')
const msg2=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    
    fetch('/weather?address='+location+'').then((response)=>{
    response.json().then((data)=>{
        if(!data.location)
        {
            return msg1.textContent=data.error
        }
        msg2.textContent=data.location
        msg2.textContent=data.temp;
    })
})
    
})