import bannerImg from '../assets/Gift on the way (1).gif'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import { Heart } from "phosphor-react";
import { Avatar, Card } from "keep-react";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Home = () => {
    document.title = 'ParcelSync | Home'
    const [counterOn, setCOunterOn] = useState(false);

    const { data = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const response = await axios.get('https://server-iota-peach-25.vercel.app/books/count/v1');
            return response.data
        }
    });

    return (
        <div className='overflow-hidden'>
            {/* banner section */}
            <section>
                <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7"  data-aos="fade-right">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Unleash the Power of Effortless <span className='text-red-500'>Deliveries</span></h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Elevate your shipping experience with ParcelSync. Simplify parcel management, enjoy real-time tracking, and ensure swift, reliable deliveries. Your logistics, reimagined.</p>
                        <form>
                            <div className="flex">
                                <input type="text" name="" id="" placeholder='Search...' className=' py-2 px-3 border border-purple-500 focus:border-0 rounded-l-md w-full max-w-xs' />
                                <input type="submit" value="Search" className='py-2 px-3 border-t border-r border-b border-purple-500 rounded-r cursor-pointer font-semibold hover:bg-red-500 hover:text-white transition-all' />
                            </div>
                        </form>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img className='w-[200%]' src={bannerImg} alt="mockup" />
                    </div>
                </div>
            </section>

            {/* features */}
            <section className="bg-white mt-20"  data-aos="fade-up">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-6xl ">Our Features</h1>
                    <p className='text-center mt-2'>Elevate your shipping experience with ParcelSync</p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex hover:scale-105 transition-all hover:bg-slate-200 flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                                <FaLocationCrosshairs className='text-2xl' />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize "> Real-Time Parcel Tracking</h1>

                            <p className="text-gray-500 ">
                                Stay in control with our real-time tracking feature, allowing you to monitor your parcel journey from pickup to delivery, ensuring transparency and peace of mind.
                            </p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
                            </a>
                        </div>

                        <div className="flex hover:scale-105 transition-all hover:bg-slate-200 flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                                <AiOutlineSafety className='text-2xl' />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize"> Safe and Secure Parcel Handling</h1>

                            <p className="text-gray-500 ">
                                We prioritize the safety of your parcels, employing careful handling and robust packaging to ensure they arrive at their destination in pristine condition.
                            </p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
                            </a>
                        </div>

                        <div className="flex hover:scale-105 transition-all hover:bg-slate-200 flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                                <CiDeliveryTruck className='text-2xl' />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize"> Express Delivery Service</h1>

                            <p className="text-gray-500">
                                Need it fast? Opt for our Express Delivery service for swift and reliable shipping, meeting your deadlines without compromising the safety and security of your items.
                            </p>
                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* statistics section */}
            <section className='px-3 md:px-0 mt-40'  data-aos="fade-up">

                <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    More Than 10 Years We Provide <br className="md:block hidden" />
                    Effortless Deliveries
                </h1>
                <ScrollTrigger onEnter={() => setCOunterOn(true)} onExit={() => setCOunterOn(false)}>
                    <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                        <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                        <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96  absolute z-0" />

                        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                            <p className="text-3xl font-semibold text-gray-800"> {counterOn && <CountUp start={0} end={data?.totalBookedCount + 30} duration={2} delay={1} />}</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Number of Parcel Booked</p>
                        </div>
                        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative sm:mt-0 mt-4 xl:mt-80 xl:-ml-0 sm:-ml-12">
                            <p className="text-3xl font-semibold text-gray-800">{counterOn && <CountUp start={0} end={data?.totalDelivered + 30} duration={2} delay={1} />}</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Number of Parcel Delivered</p>
                        </div>
                        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                            <p className="text-3xl font-semibold text-gray-800">{counterOn && <CountUp start={0} end={data?.totalUser + 40} duration={2} delay={1} />}</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Number of Registered Users</p>
                        </div>
                    </div>
                </ScrollTrigger>
            </section>

            {/* the top delivery man */}
            <section className='my-40 mx-10' data-aos="zoom-out">
                <h1 className='text-5xl text-center font-semibold mb-2 mt-16'>The Top Delivery Man</h1>
                <p className='text-center mb-10'>All of our deliveries are qualified to deliver to you efficiently. <br /> Here only the data of the five delivery men who made the highest deliveries is shown</p>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    <div className="shadow-sm transition-all  hover:scale-105 cursor-pointer">
                        <Card
                            imgSrc="https://i.ibb.co/D5DpFDF/pexels-pawel-kalisinski-1076758.jpg"
                            imgSize="md"
                            className="max-w-xs">
                            <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
                                <Heart size={20} weight="bold" color="white" />
                            </Card.Container>
                            <Card.Container className="flex flex-col items-center justify-center">
                                <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                    <Avatar size="2xl" shape="circle" img="https://i.ibb.co/kQWrgmj/pexels-cottonbro-studio-9950569.jpg" />
                                </Card.Container>
                                <Card.Container className="mb-3 mt-10 text-center">
                                    <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Nazmul Hasan</Card.Title>
                                </Card.Container>
                                <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Delivered
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">11</Card.Title>
                                    </Card.Container>
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Ratings
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">5.00</Card.Title>
                                    </Card.Container>
                                </Card.Container>
                            </Card.Container>
                        </Card>
                    </div>
                    <div className="shadow-sm transition-all  hover:scale-105 cursor-pointer">
                        <Card
                            imgSrc="https://i.ibb.co/T45G8Ls/pexels-szelei-robert-1482193.jpg"
                            imgSize="md"
                            className="max-w-xs">
                            <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
                                <Heart size={20} weight="bold" color="white" />
                            </Card.Container>
                            <Card.Container className="flex flex-col items-center justify-center">
                                <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                    <Avatar size="2xl" shape="circle" img="https://i.ibb.co/nBqb5rW/pexels-spencer-selover-428328.jpg" />
                                </Card.Container>
                                <Card.Container className="mb-3 mt-10 text-center">
                                    <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Khairul Islam</Card.Title>
                                </Card.Container>
                                <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Delivered
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">09</Card.Title>
                                    </Card.Container>
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Ratings
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">4.9</Card.Title>
                                    </Card.Container>
                                </Card.Container>
                            </Card.Container>
                        </Card>
                    </div>
                    <div className="shadow-sm transition-all  hover:scale-105 cursor-pointer">
                        <Card
                            imgSrc="https://i.ibb.co/Y8jG6h8/pexels-sebastian-voortman-189349.jpg"
                            imgSize="md"
                            className="max-w-xs">
                            <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
                                <Heart size={20} weight="bold" color="white" />
                            </Card.Container>
                            <Card.Container className="flex flex-col items-center justify-center">
                                <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                    <Avatar size="2xl" shape="circle" img="https://i.ibb.co/5RPg7Vz/pexels-arianna-jad-2896853.jpg" />
                                </Card.Container>
                                <Card.Container className="mb-3 mt-10 text-center">
                                    <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">AR Riyad</Card.Title>
                                </Card.Container>
                                <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Delivered
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">07</Card.Title>
                                    </Card.Container>
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Ratings
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">4.2</Card.Title>
                                    </Card.Container>
                                </Card.Container>
                            </Card.Container>
                        </Card>
                    </div>
                    <div className="shadow-sm transition-all  hover:scale-105 cursor-pointer">
                        <Card
                            imgSrc="https://i.ibb.co/SKw8sdK/pexels-eberhard-grossgasteiger-844297-1.jpg"
                            imgSize="md"
                            className="max-w-xs">
                            <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
                                <Heart size={20} weight="bold" color="white" />
                            </Card.Container>
                            <Card.Container className="flex flex-col items-center justify-center">
                                <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                    <Avatar size="2xl" shape="circle" img="https://i.ibb.co/9y0GrD6/pexels-stefan-stefancik-91227.jpg" />
                                </Card.Container>
                                <Card.Container className="mb-3 mt-10 text-center">
                                    <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Nayem H.</Card.Title>
                                </Card.Container>
                                <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Delivered
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">05</Card.Title>
                                    </Card.Container>
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Ratings
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">3.4</Card.Title>
                                    </Card.Container>
                                </Card.Container>
                            </Card.Container>
                        </Card>
                    </div>
                    <div className="shadow-sm transition-all  hover:scale-105 cursor-pointer">
                        <Card
                            imgSrc="https://i.ibb.co/MVFQMLX/pexels-561463.jpg"
                            imgSize="md"
                            className="max-w-xs">
                            <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
                                <Heart size={20} weight="bold" color="white" />
                            </Card.Container>
                            <Card.Container className="flex flex-col items-center justify-center">
                                <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                    <Avatar size="2xl" shape="circle" img="https://i.ibb.co/x3gJKHj/pexels-daniel-xavier-1121796.jpg" />
                                </Card.Container>
                                <Card.Container className="mb-3 mt-10 text-center">
                                    <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">K. Jahid</Card.Title>
                                </Card.Container>
                                <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Delivered
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">03</Card.Title>
                                    </Card.Container>
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Ratings
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">2.7</Card.Title>
                                    </Card.Container>
                                </Card.Container>
                            </Card.Container>
                        </Card>
                    </div>
                    <div className="shadow-sm transition-all  hover:scale-105 cursor-pointer">
                        <Card
                            imgSrc="https://i.ibb.co/b3cNzHm/pexels-samer-daboul-1275413.jpg"
                            imgSize="md"
                            className="max-w-xs">
                            <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
                                <Heart size={20} weight="bold" color="white" />
                            </Card.Container>
                            <Card.Container className="flex flex-col items-center justify-center">
                                <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                    <Avatar size="2xl" shape="circle" img="https://i.ibb.co/rtNvqfX/pexels-italo-melo-2379004.jpg" />
                                </Card.Container>
                                <Card.Container className="mb-3 mt-10 text-center">
                                    <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">K. Hasan</Card.Title>
                                </Card.Container>
                                <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Delivered
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">03</Card.Title>
                                    </Card.Container>
                                    <Card.Container className="text-center">
                                        <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                            Ratings
                                        </Card.Title>
                                        <Card.Title className="!text-body-1 !font-semibold text-metal-800">2.1</Card.Title>
                                    </Card.Container>
                                </Card.Container>
                            </Card.Container>
                        </Card>
                    </div>
                </div>
            </section>

            {/* testominial */}
            <section className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center" data-aos="zoom-in">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
                            <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=5" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;