import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState();
    const [comment, setComment] = useState();


    const onSubmitHandler = (e) => {
        e.preventDefault()
        let obj = {
            name: name,
            message: comment
        };

        console.log("name: ", name);
        console.log("comment", comment);
        console.log("objeto: " , obj)


    }
    const onChangeHandler = (e) => {

        switch (e.target.name) {
            case 'name':
                console.log(e.target.value)
                setName(e.target.value)
                break
            case 'comment':
                console.log(e.target.value)
                setComment(e.target.value)
                break

            default:
                return null;

        }

    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Nombre" name="name" onChange={onChangeHandler} />
                <textarea placeholder="Ingrese su comentario" name="comment" onChange={onChangeHandler}></textarea>
                <input type="submit" value="Agregar Comentario" />
            </form>
        </div>
    )
}

export default Form
