import { Link, useLocation } from "react-router"
import Header from "../../element/header/Header"
import TextCustom from "../../element/text/TextCustom"
import { BsPlusCircleFill } from "react-icons/bs"
import Card from "../../element/card/Card"

const HeaderFragment = ({
    data
}) => {
    const location = useLocation();
    const getPageInfo = () => {
        if (location.pathname.includes('/class')) return {
            title: 'Class Page',
            createLink: '/user/class/create',
            createLabel: 'Class',
        };
        if (location.pathname.includes('/course')) return {
            title: 'Course Page',
            createLink: '/user/course/create',
            createLabel: 'Course',
        };
        if (location.pathname.includes('/student')) return {
            title: 'Student Page',
            createLink: '/user/student/create',
            createLabel: 'Student',
        };
        if (location.pathname.includes('/teacher')) return {
            title: 'Teacher Page',
            createLink: '/user/student/create',
            createLabel: 'Teacher',
        };
    };

    const isDashboard = location.pathname.includes('/dashboard')

    const pageInfo = getPageInfo();

    return (
        <Header height={isDashboard ? 'h-[200px]': 'h-[100px]'}>
            {isDashboard && (
                <div className="grid grid-cols-4 absolute top-30 px-5 z-1 w-full gap-4">
                    <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
                        <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Class</TextCustom>
                        <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
                    </Card>
                    <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
                        <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Course</TextCustom>
                        <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
                    </Card>
                    <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
                        <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Teacher</TextCustom>
                        <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
                    </Card>
                    <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
                        <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Student</TextCustom>
                        <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
                    </Card>
                </div>
            )}
            {!isDashboard && (
                <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
                    <TextCustom type="xl_700" textColor='text-information-800'>
                        {pageInfo.title}
                    </TextCustom>
                    {data.data.role === "admin" && (
                        <Link to={pageInfo.createLink}>
                            <button className='bg-warning-500 hover:bg-warning-400 duration-150 cursor-pointer px-5 py-3 rounded-lg'>
                                <TextCustom type='md_700' textColor='text-secondary-800' classname='flex gap-2 items-center'>
                                    <BsPlusCircleFill size="20px" />
                                    {pageInfo.createLabel}Class
                                </TextCustom>
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </Header>
    )
}

export default HeaderFragment