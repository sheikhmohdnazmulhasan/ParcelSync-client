
import { NavLink, Outlet } from "react-router-dom";
import { NavbarComponent } from "../../components/Navbar";
import { MdBookmarkAdd } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { MdBookmarkAdded } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import { IoBookmarksSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
// import { CgRowFirst } from "react-icons/cg";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const Dashboard = () => {
    document.title = 'ParcelSync | Dashboard'
    const { user } = useContext(AuthContext)

    const { data = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await axios.get(`https://server-iota-peach-25.vercel.app/user/v1?email=${user.email}`);
            return response.data
        }
    });

    function handleCommonLink(props) {
        if (props == 'settings') {
            Swal.fire({
                icon: 'info',
                title: 'We are working on it!',
                text: 'We are working on these settings to be available as soon as possible.'
            })
        } else {
            Swal.fire({
                title: "Do you want to log out?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Logout!"
            }).then((result) => {
                if (result.isConfirmed) {
                    signOut(auth).then(() => {
                        Swal.fire({
                            title: "Logged Out.",
                            icon: "success"
                        });
                    })
                }
            });
        }
    }

    const userLinks = <>
        <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="">
                <NavLink to={'/dashboard'}><a className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                    </svg>
                    <span>Dashboard</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/book-parcel'}> <a className="flex items-center p-2 space-x-3 rounded-md">
                    <MdBookmarkAdd className="text-2xl" />
                    <span>Book Parcel</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/my-parcel'}> <a className="flex items-center p-2 space-x-3 rounded-md">
                    <MdBookmarkAdded className="text-2xl" />
                    <span>My Parcels</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/profile'}><a className="flex items-center p-2 space-x-3 rounded-md">
                    <RxAvatar className="text-2xl" />
                    <span>My Profile</span>
                </a></NavLink>
            </li>
        </ul>
    </>

    const deliveryManLinks = <>
        <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="">
                <NavLink to={'/dashboard'}><a className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                    </svg>
                    <span>Dashboard</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/my-delivery-list'}> <a className="flex items-center p-2 space-x-3 rounded-md">
                    <TbTruckDelivery className="text-2xl" />
                    <span>My Delivery List</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/reviews'}> <a className="flex items-center p-2 space-x-3 rounded-md">
                    <MdOutlineReviews className="text-2xl" />
                    <span>My Reviews</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/profile'}><a className="flex items-center p-2 space-x-3 rounded-md">
                    <RxAvatar className="text-2xl" />
                    <span>My Profile</span>
                </a></NavLink>
            </li>
        </ul>
    </>

    const adminLinks = <>
        <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="">
                <NavLink to={'/dashboard'}><a className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                    </svg>
                    <span>Dashboard</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/all-parcels'}>
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                        <IoBookmarksSharp className="text-xl" />
                        <span>All Parcels</span>
                    </a>
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/users'}><a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <FaUsers className="text-xl" />
                    <span>All Users</span>
                </a></NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/all-deliveryman'}>
                    <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                        <SiPostman className="text-xl" />
                        <span>All Delivery Mans</span>
                    </a></NavLink>
            </li>
            {/* <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <CgRowFirst className="text-3xl" />
                    <span>Statistics</span>
                </a>
            </li> */}
            <NavLink className={({ isActive }) => isActive ? 'text-red-600 font-bold' : ''} to={'/dashboard/profile'}><a className="flex items-center p-2 space-x-3 rounded-md">
                <RxAvatar className="text-2xl" />
                <span>My Profile</span>
            </a></NavLink>
        </ul>
    </>

    return (
        <div data-aos="fade-left">
            <NavbarComponent />
            <div className="flex border">
                <div className="h-full p-3 space-y-2 w-72 min-h-screen border">
                    <div className="flex items-center space-x-4">
                        <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full" />
                        <div>
                            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                            <span className="flex items-center space-x-1">
                                <p className="text-xs">{data?.accType}</p>
                            </span>
                        </div>
                    </div>
                    <div className="divide-y">
                        {data?.accType == 'Admin' ? adminLinks : data?.accType == 'Delivery Man' ? deliveryManLinks : userLinks}
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            <li>
                                <a className="flex items-center p-2 space-x-3 rounded-md cursor-pointer" onClick={() => handleCommonLink('settings')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                                        <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                                    </svg>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center p-2 space-x-3 rounded-md cursor-pointer" onClick={() => handleCommonLink('logout')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                        <rect width="32" height="64" x="256" y="232"></rect>
                                    </svg>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-10 flex-1 bg-[##FDF4E7]">
                    <Outlet />
                </div>
            </div>
            <div className=""><Footer /></div>
        </div>
    );
};

export default Dashboard;