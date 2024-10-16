import {useEffect, useState} from 'react'
import './gallery.css'

function Gallery() {
const [images, setImages] = useState([])

useEffect(()=> {

    const fetchImages = ()=>{
      const data = [
        {
          id:1,
          url:'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D',
          title:'People'
        },
        {
          id:2,
          url:'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww', 
          title:'Nature'
        },
        {
          id:3,
          url:'https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww', 
          title:'Sea'
        },
        {
          id:4,
          url:'https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D', 
          title:'Aurora'
        },
        {
          id:5,
          url:'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D', 
          title:'Forest'
        },
        {
          id:6,
          url:'https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fHww', 
          title:'Flower'
        },
        {
          id:7,
          url:'https://images.unsplash.com/photo-1446292532430-3e76f6ab6444?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D', 
          title:'Plant'
        },
        {
          id:8,
          url:'https://images.unsplash.com/photo-1476293602671-beea27e1e702?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D', 
          title:'Animal'
        }
    ]
    setImages(data)
    }
    fetchImages()

},[])

const handleDeleteImage =(id)=> {
  setImages(images.filter((image)=> image.id !== id))
}

 

return (
    <div>
        <h1 className="title ">Image Gallery App</h1>
        {
          images.length >0 ?
          (
            <div className="image-grid">

          {
            images.map((image)=> (
              <div className="img-card" key={image.id}>
                <img className='images' src={image.url} alt='' />
              <div className="img-details">
                  <h4>{image.title}</h4>
                  <button onClick={()=> handleDeleteImage(image.id)}>Delete</button>
              </div>

          </div>
            ))
              
          }
            

        </div>
          ) : <p className='no-img'>No Images Found</p>
        }

        
    </div>
  )
}
export default Gallery