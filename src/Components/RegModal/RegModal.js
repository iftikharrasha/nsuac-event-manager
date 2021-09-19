import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import CampusStarBtn from '../CampusStarBtn/CampusStarBtn';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
  
Modal.setAppElement('#root');

const RegModal = ({modalIsOpen, closeModal}) => {
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} type="button" className="close">
                    <span aria-hidden="true">×</span>
                </button>
                <div className="text-center">
                    <h2 className="text-center c-tag-1 lit-20">Registration to</h2>
                </div>

                <Container className="my-5">
                    <Row>
                        <Col md={12}>
                            <div className="">
                                <div className="call-to-act mt-2 text-sm-center">
                                    <span className="mr-2">
                                        <a href="#" className="disabled pl-3 px-5 py-3">
                                            <span> Battle of Skills</span>
                                        </a>
                                    </span>
                                    <span className="ml-2">
                                        <CampusStarBtn closeModal={closeModal}></CampusStarBtn>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Modal>
        </>
    );
};

export default RegModal;