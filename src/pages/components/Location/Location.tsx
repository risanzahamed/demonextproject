import Image from "next/image";
import map from '../../../assets/location/map.jpg';
function Location() {
    return (
        <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32  md:px-8 sm:max-w-xl md:max-w-full bg-slate-50">
  
          <h1 className=" py-10 text-center under
           text-rose-500 uppercase text-xs font-semibold underline text-secondary-300 ">Agency Location</h1>
            
           <Image src={map}  alt="map" className=" w-full  "/>
    
           </div>
         
    );
}

export default Location;