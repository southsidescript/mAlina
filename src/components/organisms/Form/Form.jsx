'use client'
import { useEffect, useState } from "react";
import PrimaryButton from '@/components/atoms/Button_Primary/PrimaryButton';



const Form = () => {

  const [user,setUser] = useState({});
  


   function sendMesage(e){
         
    
    let message = `У Вас новый лид ,Алина! \n

    Имя:${user.name} \n
    Номер:${user.phone_number} \n
    Email: ${user.email} \n
       
    `;
    console.log('МОМЕНТ ОТПРАВКИ:',message)

    e.preventDefault();
    fetch('api/telegram',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(message)
        }
    )
    .then(res=>res.json())
    .then(data=>{console.log(data)}) 
   
   }

    return(
        
        <form>
            <input onBlur={(e)=>{
                setUser({...user,name:e.target.value});
            
            }}  type="text"  placeholder='Как вас зовут ?'/>
            <input type="text"  placeholder='Какой у вас email ?' onBlur={(e)=>{
                setUser({...user,email:e.target.value});
            
            }} />
            <input type="text"  placeholder='Какой у вас номер телефона ?' onBlur={(e)=>{
                setUser({...user,phone_number:e.target.value});
            
            }} />
            <PrimaryButton send={sendMesage}> Связаться </PrimaryButton>

       </form>



    )
}

export default Form;