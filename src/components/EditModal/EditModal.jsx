import { Button, Modal } from 'react-bootstrap';
import React, {useState} from 'react';

const EditModal = ({show, setShow, handleEditTask}) => {
    const[task,setTask] = useState(taskToEdit.task)
    function save(){
        let editedTask = {
            task,
            id:taskToEdit.id
        }
        handleEditTask(editedTask)
    }

            return (
                <>
                    <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><input onChange={(event) => setTask(event.target.value)} type="text" value={task} placeholder='task' /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                        </Button>
                        <Button onClick={() => save()} variant="primary" >
                        Save Changes
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </>
                );
                }
export default EditModal;