import { Link } from "react-router"
import TextCustom from "../../element/text/TextCustom"
import { BsBellFill, BsBookHalf, BsDoorOpenFill, BsFillHouseDoorFill, BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs"

const Sidebar = ({
    name = "Rizkisdsdsd",
    role = "teacher"
}) => {
    return (
        <>
            <div className="bg-information-800 text-white mr-2 rounded-r-3xl flex justify-between flex-col gap-4 h-full">
                <div className="">
                    <div className="logo pt-10 pb-5 pl-5 border-b border-b-secondary-100">
                        <TextCustom type="2xl_700">
                            Bisa<span className="text-warning-400">Banget</span>
                        </TextCustom>
                    </div>
                    <div className="py-10 px-5 border-b border-b-secondary-100">
                        <TextCustom type="lg_600">
                            Selamat Datang <span className="text-warning-500">{name.slice(0, 5)}</span>
                        </TextCustom>
                        <TextCustom type="sm_400" textColor="text-secondary-200">
                            {role}
                        </TextCustom>

                    </div>
                    <div className="flex flex-col">
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/dashboard">
                                <div className="flex items-end gap-4">
                                    <BsFillHouseDoorFill size="25px" />
                                    <TextCustom type="md_500">Dashboard</TextCustom>
                                </div>
                            </Link>
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/class">
                                <div className="flex items-end gap-4">
                                    <BsBellFill size="25px" />
                                    <TextCustom type="md_500">Class</TextCustom>
                                </div>
                            </Link>
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/course">
                                <div className="flex items-end gap-4">
                                    <BsBookHalf size="25px" />
                                    <TextCustom type="md_500">Course</TextCustom>
                                </div>
                            </Link>
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/teacher">
                                <div className="flex items-end gap-4">
                                    <BsFillPersonFill size="25px" />
                                    <TextCustom type="md_500">Teacher</TextCustom>
                                </div>
                            </Link >
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/students">
                                <div className="flex items-end gap-4">
                                    <BsFillPeopleFill size="25px" />
                                    <TextCustom type="md_500">Students</TextCustom>
                                </div>
                            </Link>
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/logout">
                                <div className="flex items-end gap-4">
                                    <BsDoorOpenFill size="25px" />
                                    <TextCustom type="md_500">Logout</TextCustom>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar