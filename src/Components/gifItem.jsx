
export const GifItem=({title,url})=>{

  return ( 
     <div >
    <img src={url} />
    <p>{title}</p>
    </div>
  )
}