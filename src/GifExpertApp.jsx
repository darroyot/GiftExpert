import { useState } from "react"
import { GifGrid,AddCategory } from "./Components"

export const GifExpertApp=()=>{
const [categories , setCategories] = useState([])

const OnAddCategory=(evalue)=>{

if(categories.includes(evalue)) return; //Si incluye la nueva categoria no la envia.el return hace como que sale y no se ejecuta mas

   setCategories([...categories,evalue]);


}

return(
<>


{/* </><AddCategory insert={ setCategories}>Mandas el set categories al file AddCategory,y de ahi añades lo que vayas a escribir en si input */}
<AddCategory 

OnAddCategory={evalue=>OnAddCategory(evalue)}>

</AddCategory>



{categories.map(category=>{
return <GifGrid key={category} category={category} />
})
}


</>
)
}