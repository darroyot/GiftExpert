import { GifItem } from './gifItem';
import { UseFetchGifs } from "../Hooks/UseFetchGifs";


export const GifGrid=({ category })=>{

const {data,isLoading}=UseFetchGifs({category});//Es un hook personalizado
console.log(isLoading)
return(
<>

{

isLoading && (<h1>Cargando............</h1>)

}
<h3>{category}</h3>

<div className="card-grid">
{
  
 data.map((data)=>(

    <GifItem key={ data.id } { ...data }/>
 )
 )

}
</div>
</>

)
}
