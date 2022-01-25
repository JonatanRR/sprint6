import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

export const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    }
    return(
        <div className='primary'> 
            <div className='secondary'> 
                <Modal isOpen= {isOpen}>
                    <ModalHeader>
                        Benvingut!
                    </ModalHeader>
                    <ModalBody>
                        Prem els botons per començar i segueix la història del nostre heroi!
                    </ModalBody>
                    <ModalFooter>
                        <Button color= "primary" onClick={closeModal}>Començar amb la història</Button>
                    </ModalFooter>
                </Modal>
            </div> 
        </div> 
    )
}