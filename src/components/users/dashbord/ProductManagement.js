import axios from "axios";
import { useEffect, useState } from "react";
import UserDashbord from "./UserDashbord";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const ProductManagement = () => {

    const [name,setName] = useState('');
    const [price ,setPrice] = useState('');
    const [image ,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
  


  const [products,setProducts] = useState(null);
  

  



  const handleSubmit = async(e) => {
    e.preventDefault();

    const product = {name,price,image,description,category};

    let res = await axios.post(`${process.env.REACT_APP_URL_API}/product/addProduct`, product)


    if(res.data.error !== undefined){

      res.data.error.forEach(item =>{

          toastr.warning(item ,{
              positionClass: "toast-top-left",
          })
      })

    } else{
      toastr.info( res.data.message, {
      positionClass: "toast-top-left",
    })
    }
 

   


  }


  // ----------------------detete admin --------------------------


//     const handleDelete = (id) => {

 
//     axios.delete(`${process.env.REACT_APP_URL_API}/admin/deleteAdmin/${id}`)
//     .then(res => {
//       console.log(res);
       
//     })

//   }




  useEffect(()=>{

    axios.get(`${process.env.REACT_APP_URL_API}/product/myProducts`)
    .then(function (response) {
     
      setProducts(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })



  const handleDelete = (id) => {

 
    axios.delete(`${process.env.REACT_APP_URL_API}/product/deleteProduct/${id}`)
    .then(res => {
      
      toastr.info( res.data.message, {
        positionClass: "toast-top-left",
      })
       
    })

  }

  

    return ( 
        <>
           <div className="flex flex-wrap bg-gray-100 w-full h-screen">

            <UserDashbord/>


            <div className="w-9/12   ">
                <div className="p-4 text-gray-500">
                   ...
                    <div className=" min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden mt-10 sm:mt-0">
                        <div className=" w-full lg:w-5/6">

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                       <h1>Add New Product</h1>
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first_name"
                                                        className="block text-sm font-medium text-gray-700">
                                                        name</label>

                                                    <input type="text" name="name" id="name"
                                                        
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                                                        value={name}
                                                        onChange={(e)=>setName(e.target.value)}
                                                        />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="Price"
                                                        className="block text-sm font-medium text-gray-700">Price</label>

                                                    <input type="text" id="Price"
                                                       
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                                                        value={price}
                                                        onChange={(e)=>setPrice(e.target.value)}
                                                        />
                                                </div>
                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="Description"
                                                        className="block text-sm font-medium text-gray-700">Description</label>

                                                    <input type="text"  id="Description"
                                                        
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        value={description}
                                                        onChange={(e)=>setDescription(e.target.value)}
                                                        />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="Category"
                                                        className="block text-sm font-medium text-gray-700">Category</label>
                                                    <select id="Category"  autoComplete="Category"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        value={category}
                                                        onChange={(e)=>setCategory(e.target.value)}
                                                        >
                                                        <option value="diamond">diamond</option>
                                                        <option value="gold"> gold</option>
                                                        <option value="metal">metal</option>
                                                        <option value="silver">silver</option>
                                                        <option value="copper">copper</option>
                                                        
                                                    </select>
                                                </div>
                                     
                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label htmlFor="image"
                                                        className="block text-sm font-medium text-gray-700">Image</label>
                                                    <input type="text"  id="image"
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                                                        value={image}
                                                        onChange={(e)=>setImage(e.target.value)}
                                                        />
                                                </div>
                                 

                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Add 
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* table of products */}

                    
      
      <div className="overflow-x-auto">
        <div className="min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left"> Name</th>
                    <th className="py-3 px-6 text-left">Price</th>
                    <th className="py-3 px-6 text-center">Description</th>
                    <th className="py-3 px-6 text-center"> Category</th>
                    {/* <th className="py-3 px-6 text-center">City</th> */}
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  
                  {
                    products &&
                    products.map((product) =>(

                      <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{product.name}</span>
                        </div>
                        <img className="w-40" src={product.image} alt="" srcset=""/>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{product.price}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <samp className="font-medium">{product.description}</samp>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{product.category}</span>
                      </td>
                      {/* <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">{product.city}</span>
                        </div>
                      </td> */}
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div onClick={()=>{handleDelete(product._id)}} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  >
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                      
                    ))
                  }


                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

                </div>
            </div>

</div>
        </>
     );
}
 
export default ProductManagement;