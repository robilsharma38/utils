import React from 'react';

export default function Alert(props){

    const capitialize = (word) => {
        let lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }

    return(
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitialize(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>
    )
}