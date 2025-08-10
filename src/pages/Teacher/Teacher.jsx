import { useLoaderData } from 'react-router'
import TeacherFragment from '../../components/fragment/teacher/TeacherFragment'
import SectionWrapper from '../../components/fragment/wrapper/SectionWrapper'
import AdvisorFragment from '../../components/fragment/advisor/AdvisorFragment'

const Teacher = () => {
    const data = useLoaderData()
    
    return (
        <>
            <SectionWrapper maxWidth='' padding=''>
                {data.role === "admin" ? <TeacherFragment /> : <AdvisorFragment />}
            </SectionWrapper>
        </>
    )
}

export default Teacher