
import web from '../../../assets/service/web.jpg';
import branding from '../../../assets/service/branding.jpg';
import digital from '../../../assets/service/digital.jpg';
import email from '../../../assets/service/email.jpg';
import graphic from '../../../assets/service/graphic.jpg';
import ux from '../../../assets/service/ux.jpg';
import Image from 'next/image';


function Services() {
    const categories = [{
        id:'1',
        img: web,
    title:
      "Web developing",
     details: " web Development is a well-established IT Section of creatix with a varied range of experience on customer-satisfactory strategy.  "
    },
  { id:'2',
        img: branding,
    title:
      "Brand Consulting",
     details: " web Development is a well-established IT Section of creatix with a varied range of experience on customer-satisfactory strategy. "
    },
    {
        id:'3',
        img: digital,
    title:
      "Digital Marketing",
     details: " Digital Marketing is a well-established IT Section of creatix with a varied range of experience on customer-satisfactory strategy. "
    },
    {
        id:'4',
        img: graphic,
    title:
      "Graphic Design",
     details: " Digital Marketing is a well-established IT Section of creatix with a varied range of experience on customer-satisfactory strategy. "
    },
    {
        id:'5',
        img: email,
    title:
      "Email Marketing",
     details: " Email Marketing is a well-established IT Section of creatix with a varied range of experience on customer-satisfactory strategy. "
    },
    {
        id:'6',
        img: ux,
    title:
      "Ui/Ux Design",
     details: " Ui/Ux Design is a well-established IT Section of creatix with a varied range of experience on customer-satisfactory strategy. "
    },
]
    return (

    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-secondary-300 underline uppercase rounded-full bg-teal-accent-400">
           Our Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Building</span>
          </span>{' '}
         brands with purpose and your passion
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
   
      <section className="p-4 lg:p-4  text-gray-900">
	<div className=" grid grid-cols-2 mx-auto gap-5 ">
    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row shadow-md border-gray-300 ">
			<Image src={categories[0].img} alt="" className=" dark:bg-gray-500 " />
			<div className="flex flex-col justify-center flex-1 p-6 ">
			
				<h3 className="text-3xl font-bold">{categories[0].title}</h3>
				<p className="my-6 text-gray-900">{categories[0].details}</p>
				<button type="button" className="self-start font-semibold">Read more</button>
			</div>
            <div>
		</div>
	</div>
    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row  shadow-md  border-gray-300 ">
			<Image src={categories[1].img} alt="" className=" dark:bg-gray-500 " />
			<div className="flex flex-col justify-center flex-1 p-6 ">
			
				<h3 className="text-3xl font-bold">{categories[1].title}</h3>
				<p className="my-6 text-gray-900">{categories[1].details}</p>
				<button type="button" className="self-start font-semibold">Read more</button>
			</div>
            <div>
		</div>
	</div>
    <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row  shadow-md  border-gray-300 ">
			<Image src={categories[2].img} alt="" className=" dark:bg-gray-500 " />
			<div className="flex flex-col justify-center flex-1 p-6 ">
			
				<h3 className="text-3xl font-bold">{categories[2].title}</h3>
				<p className="my-6 text-gray-900">{categories[2].details}</p>
				<button type="button" className="self-start font-semibold">Read more</button>
			</div>
            <div>
		</div>
	</div>
    <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row  shadow-md  border-gray-300 ">
			<Image src={categories[3].img} alt="" className=" dark:bg-gray-500 " />
			<div className="flex flex-col justify-center flex-1 p-6 ">
			
				<h3 className="text-3xl font-bold">{categories[3].title}</h3>
				<p className="my-6 text-gray-900">{categories[3].details}</p>
				<button type="button" className="self-start font-semibold">Read more</button>
			</div>
            <div>
		</div>
	</div>
    <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row  shadow-md  border-gray-300 ">
			<Image src={categories[4].img} alt="" className=" dark:bg-gray-500 " />
			<div className="flex flex-col justify-center flex-1 p-6 ">
			
				<h3 className="text-3xl font-bold">{categories[4].title}</h3>
				<p className="my-6 text-gray-900">{categories[4].details}</p>
				<button type="button" className="self-start font-semibold">Read more</button>
			</div>
            <div>
		</div>
	
	</div>
    <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row  shadow-md  border-gray-300 ">
			<Image src={categories[5].img} alt="" className=" dark:bg-gray-500 " />
			<div className="flex flex-col justify-center flex-1 p-6 ">
			
				<h3 className="text-3xl font-bold">{categories[5].title}</h3>
				<p className="my-6 text-gray-900">{categories[5].details}</p>
				<button type="button" className="self-start font-semibold">Read more</button>
			</div>
            <div>
		</div>
	</div>

    </div>
</section>
</div>
       
 



    );
}

export default Services;