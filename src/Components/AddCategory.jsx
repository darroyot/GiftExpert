import { useState } from "react"

export const AddCategory=({ OnAddCategory })=>{

const [inputValue,setInputValue]=useState();
const onInputchanged=({target})=>{

setInputValue(target.value);

}


const onSubmit=(event)=>{

    event.preventDefault();///Se usa para que no se refresque la pagina al enviar el formulario
   // setCategories(categories=>[inputValue,...categories]) aqui le pasamos toda la lista para añadirle uno mas
   if(inputValue.trim().length <0) return;
   OnAddCategory(inputValue.trim());//Emite arriba
   setInputValue('');
}


return(
<form onSubmit={(event)=>onSubmit(event) }>
<input 

placeholder="Inserte lo que quiera"
type="text"
value={ inputValue }
 onChange={ onInputchanged }
 />
 </form>
 


)    


}