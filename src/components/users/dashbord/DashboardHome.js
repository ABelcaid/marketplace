import UserDashbord from "./UserDashbord";
import PaymentPana from '../../../img/Payment_pana.png';


 

const DashboardHome = () => {
    return ( 
        <>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <UserDashbord/>
            <div className="w-9/12 ">
                <div className="p-4 text-gray-500">
                    <div className=" min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden mt-10 sm:mt-0">
                        <div className=" w-full lg:w-5/6">




                            <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Welocom</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </h1>
                                <img className="" src={PaymentPana}  />
                                </div>
                                </div>
                                </section>
                        </div>
                </div>
                
          

                </div>
                </div>

        
                	
        </div>
        </>
     );
}
 
export default DashboardHome;