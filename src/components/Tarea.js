import React, {useState} from 'react';

const Tarea = (props) => {
    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState('');
    const editar = () =>{
        setModoEdit(true);
    }
    const manejarEdit = (e) =>{
        setEditText(e.target.value);
    }
    const submitEdit = (e) =>{
        e.preventDefault();
        props.editar(props.id, editText);
        setEditText('');
        setModoEdit(false);
    }
    const borrarTarea = () =>{
        props.borrar(props.id);

    }
    return (
        <>
        {
            !modoEdit ?
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span className="span">
                    {props.tarea}
                </span>
                <div>
                <span>
                    <i
                        onClick={editar}
                        className="far fa-edit">
                    </i>
                </span>
                <span>
                    <i
                        onClick={borrarTarea}
                        className="far fa-trash-alt">
                    </i>
                </span>
                </div>
            </li>
            :
            <div className="container px-0">
                <form className="form row px-0" onSubmit={submitEdit}>
                    <div className="col-md-6">
                        <input type="text" className="form-control" value={editText} onChange={manejarEdit}/>
                    </div>
                    <div className="col-auto px-0">
                        <button type="submit" className="btn btn-secondary mb-3">Save Change</button>
                    </div>
                </form>
            </div>
        }
        </>
    )
}

export default Tarea