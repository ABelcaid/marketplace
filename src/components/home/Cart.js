import Footer from "../global/Footer";
import NavBar from "../global/NavBar";

const Cart = () => {
    return ( 
        <>

        <NavBar/>

        <section className="text-gray-600 body-font h-screen">
        <div className="flex justify-center my-6 " >
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                    <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                        <thead>
                            <tr className="h-12 uppercase">
                                <th className="hidden md:table-cell" />
                                <th className="text-left">Product</th>
                             
                                <th className="text-right"> Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="hidden pb-4 md:table-cell">
                                    <a href="#">
                                        <img src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
                                            className="w-20 rounded" alt="Thumbnail" />
                                    </a>
                                </td>
                                <td>
                                    <a href="#">
                                        <p className="mb-2 md:ml-4">Earphone</p>
                                        <form action method="POST">
                                            <button type="submit" className="text-gray-700 md:ml-4">
                                                <small>(Remove item)</small>
                                            </button>
                                        </form>
                                    </a>
                                </td>
                              
                                
                                <td className="text-right">
                                    <span className="text-sm lg:text-base font-medium">
                                        20.00€
                                    </span>
                                </td>
                            </tr>
                    
                        </tbody>
                    </table>
                </div>
                <a href="#">
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-blue-500 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                        <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                        <span className="ml-2 mt-5px">Procceed to checkout</span>
                    </button>
                </a>
            </div>
        </div>

        </section>

 

        <Footer/>

        </>

        
     );
}
 
export default Cart;