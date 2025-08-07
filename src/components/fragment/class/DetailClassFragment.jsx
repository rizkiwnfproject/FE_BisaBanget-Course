import { Link } from "react-router"
import Header from "../../element/header/Header"
import ImageCustom from "../../element/image/Image"
import TextCustom from "../../element/text/TextCustom"

const DetailClassFragment = ({
    id = 1
}) => {
    return (
        <>
            <div className="">
                <Header height='h-[100px]'>
                    <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
                        <TextCustom type="xl_700" textColor='text-information-800'>
                            Detail Class
                        </TextCustom>
                        <div className="flex gap-2 w-1/4">
                            <button className='bg-warning-500 py-2 rounded w-full'>
                                <Link to={`/user/class/edit/${id}`}>
                                    <TextCustom type='md_500'>
                                        Edit
                                    </TextCustom>
                                </Link>
                            </button>
                            <button className='bg-error-500 py-2 rounded w-full' onClick={() => document.getElementById('delete').showModal()}>
                                <TextCustom type='md_500' textColor='text-white'>
                                    Hapus
                                </TextCustom>
                            </button>
                        </div>
                    </div>
                </Header>
                <div className="mt-20 grid grid-cols-2 gap-2 pr-4">
                    <div className="px-4">
                        <div className="space-y-5">
                            <TextCustom type="3xl_700">Nama Kelas</TextCustom>
                            <div className="space-y-3">
                                <TextCustom type="lg_600">Deskripsi Kelas</TextCustom>
                                <TextCustom type="sm_400" classname="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis autem, fugiat mollitia velit, exercitationem dolores ducimus, repellat excepturi error aliquam labore. Suscipit, esse fugiat. Quidem sed quaerat incidunt nesciunt libero.</TextCustom>
                            </div>
                            <div className="border border-secondary-100 px-3 py-4 rounded flex justify-between">
                                <TextCustom type="lg_600">Wali Kelas : </TextCustom>
                                <TextCustom type="lg_600">Hendra</TextCustom>
                            </div>
                            <div className="border border-secondary-100 px-3 py-4 rounded flex flex-col gap-4">
                                <TextCustom type="lg_600">Mata Pelajaran </TextCustom>
                                <div className="w-full flex justify-between">
                                    <TextCustom type="sm_400">IPA</TextCustom>
                                    <TextCustom type="sm_400">Hendra</TextCustom>
                                </div>
                                <div className="w-full flex justify-between">
                                    <TextCustom type="sm_400">IPA</TextCustom>
                                    <TextCustom type="sm_400">Hendra</TextCustom>
                                </div>
                                <div className="w-full flex justify-between">
                                    <TextCustom type="sm_400">IPA</TextCustom>
                                    <TextCustom type="sm_400">Hendra</TextCustom>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="students w-full border border-secondary-100 rounded px-3 py-4 flex flex-col gap-4">
                        <TextCustom type="lg_600">Nama Siswa </TextCustom>
                        <ol className="list-decimal list-inside">
                            <li>Item pertama</li>
                            <li>Item kedua</li>
                            <li>Item ketiga</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailClassFragment