import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './index.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { crud } from "../../store/personSlice";

const PeopleAdditionDeletion = () => {

  const [action, setAction] = useState('')

  const dispatch = useDispatch()

  const personAction = (event) => {
    setAction(event.target.value)
    // console.log(event.target.value)
    dispatch(crud(event.target.value))
  }

  

  return (
    <div>
      <div>
        <h6>People</h6>
        <div>
          <Link to='/add'><Button variant="secondary" className="me-5 fonts" onClick={personAction} value="add">Add</Button></Link>
          <Button variant="secondary" className="me-5 fonts" onClick={personAction} value="edit">Edit</Button>
          <Link to="/add"><Button variant="secondary" className="me-5 fonts" onClick={personAction} value="delete">Delete</Button></Link>
        </div>
      </div>
      <div>
        <h6>Logs</h6>
        <Button variant="secondary" className="me-1 fonts">Person Log</Button>
        <Button variant="secondary" className="me-2 fonts">Inst Log</Button>
        <Button variant="secondary" className="me-3 fonts">SToP</Button>
      </div> 
    </div>
  );
};

export default PeopleAdditionDeletion;
