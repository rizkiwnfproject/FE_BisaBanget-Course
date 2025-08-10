import { Link, useNavigate } from "react-router"
import TextCustom from "../../element/text/TextCustom"
import { BsBellFill, BsBookHalf, BsDoorOpenFill, BsFillHouseDoorFill, BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs"
import secureLocalStorage from "react-secure-storage"
import { STORAGE_KEY } from "../../../utils/const"

const Sidebar = ({
    data
}) => {
    const navigate = useNavigate()
    const logout = () => {
        secureLocalStorage.removeItem(STORAGE_KEY)
        navigate("/sign-in")
    }
    return (
        <>
            <div className="bg-information-800 text-white mr-2 rounded-r-3xl flex justify-between flex-col gap-4 h-full">
                <div className="">
                    <div className="logo pt-10 pb-5 pl-5 border-b border-b-secondary-100">
                        <TextCustom type="2xl_700" classname="hidden lg:block">
                            Bisa<span className="text-warning-400">Banget</span>
                        </TextCustom>
                    </div>
                    <div className="py-10 px-5 border-b border-b-secondary-100">
                        <TextCustom type="lg_600" classname="hidden lg:block">
                            Selamat Datang <span className="text-warning-500">{data.data.name.slice(0, 10)}</span>
                        </TextCustom>
                        <TextCustom type="sm_400" respText="text-xs" textColor="text-secondary-200">
                            {data.data.role}
                        </TextCustom>
                    </div>
                    <div className="flex flex-col">
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/dashboard">
                                <div className="flex items-end gap-4">
                                    <BsFillHouseDoorFill size="25px" />
                                    <TextCustom type="md_500" classname="hidden lg:block">Dashboard</TextCustom>
                                </div>
                            </Link>
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/class">
                                <div className="flex items-end gap-4">
                                    <BsBellFill size="25px" />
                                    <TextCustom type="md_500" classname="hidden lg:block">Kelas</TextCustom>
                                </div>
                            </Link>
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to="/user/subject">
                                <div className="flex items-end gap-4">
                                    <BsBookHalf size="25px" />
                                    <TextCustom type="md_500" classname="hidden lg:block">Pelajaran</TextCustom>
                                </div>
                            </Link>
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <Link to={data.data.role === "admin" ? "/user/teacher": "/user/class-advisor"}>
                                <div className="flex items-end gap-4">
                                    <BsFillPersonFill size="25px" />
                                    <TextCustom type="md_500" classname="hidden lg:block">{data.data.role === "admin" ? "Teacher":"Wali Kelas"}</TextCustom>
                                </div>
                            </Link >
                        </div>
                        <div className="hover:bg-information-300 hover:text-information-900 pl-5 py-5  ease-in-out transition-all duration-300">
                            <button onClick={logout}>
                                <div className="flex items-end gap-4">
                                    <BsDoorOpenFill size="25px" />
                                    <TextCustom type="md_500" classname="hidden lg:block">Logout</TextCustom>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar