import React from 'react';

export const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            console.log('formErrors',formErrors)
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>