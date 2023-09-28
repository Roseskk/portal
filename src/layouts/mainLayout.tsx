import React, {useEffect, useState} from "react";
import {ILayout} from "../types/layouts";
import Header from "../components/header/header";
import ModalTable from "../components/ui/modalTable";
import {useModal} from "../hooks/useModal";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

const MainLayout: React.FC<ILayout> = ({ children }) => {
    const {modalName, closeModal, isModalOpen} = useModal()
    const [modalData, setModalData] = useState<any>([])

    const profileData = useSelector((state: RootState )=> state.profileReducer.profile)
    const facultyData = useSelector((state: RootState )=> state.facultyReducer.faculties)
    const groupData = useSelector((state: RootState) => state.groupReducer.groups)

    useEffect(() => {
        switch (modalName){
            case 'Профили': return setModalData(profileData)
            case 'Факультеты': return setModalData(facultyData)
            case 'Группы': return setModalData(groupData)
            default: return setModalData([])
        }
    },[modalName])
    return(
        <div className={'h-full'}>
            {
                isModalOpen &&  <ModalTable data={modalData} open={isModalOpen} onClose={closeModal} />
            }
            <Header />
            <div className={'max-w-[1800px] mx-auto'}>
                {children}
            </div>
            {/*<footer>Footer</footer>*/}
        </div>
    )
}


export default MainLayout