import Product from "./Product"

function SlideProduct() {
  return (
    <div className="w-[80%] mx-auto py-8">
        <div className="">
            <h2 className="font-bold text-4xl mb-4 text-blue-500">Smart Phones</h2>
            <p className="text-gray-700 w-[60%] mb-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt iusto blanditiis corrupti doloremque velit voluptatibus soluta consectetur perspiciatis asperiores quis nobis aut debitis dolore delectus totam numquam, in assumenda!</p>
            <div className="w-[100px] h-1 bg-blue-500"></div>
        </div>
        <Product/>
    </div>
  )
}

export default SlideProduct
