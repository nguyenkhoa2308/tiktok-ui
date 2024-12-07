import { useState } from 'react';

function useModal() {
    const [modals, setModals] = useState({});

    const openModal = (modalName) => {
        setModals((prev) => ({ ...prev, [modalName]: true }));
    };

    const closeModal = (modalName) => {
        setModals((prev) => ({ ...prev, [modalName]: false }));
    };

    const isModalOpen = (modalName) => !!modals[modalName];

    return { openModal, closeModal, isModalOpen };
}

export default useModal;
