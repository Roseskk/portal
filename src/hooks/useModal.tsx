import React, {createContext, ReactNode, useContext, useState} from "react";

interface ModalContextType {
    isModalOpen: boolean;
    modalName: string;
    openModal: (data: any) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType| undefined>(undefined)

export function useModal() {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error("useModal должен использоватсья внутри ModalProvider")
    }
    return context
}

interface ModalProviderProps {
    children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState<string>('')

    const openModal = (name: string) => {
        setModalName(name)
        setIsModalOpen(true);
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setModalName('')
        setIsModalOpen(false);
    };

    return(
        <ModalContext.Provider value={{isModalOpen,modalName, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}