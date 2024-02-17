import React from 'react'

interface ProductsImagesProps {
  image: string;
}

function ProductsImagesThumbnail({image} : ProductsImagesProps) {

  console.log(image)
  return (
    <div className=' aspect-square h-[70px] max-[1000px]:h-[50px] rounded-xl bg-slate-400'></div>
  )
}

export default ProductsImagesThumbnail