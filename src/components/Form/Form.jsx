import React from "react";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";

const schema = 
    yup.object().shape({
  name: yup.string().required(),
});


const initialValues = {
  name: '',
  id: nanoid(),
};

let savedValues = [];


const UserForm = () => {
    const onSubmit = (values, { resetForm }) => {
     const savedValues = values;
        resetForm();
       console.log(savedValues)

    }
    return (
        <div>
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Form autoComplete="off">
                <label htmlFor="name">
                    Name
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <button type="submit">Submit</button>
            </Form>
            </Formik>
         
            <div>Contacts 
               {savedValues.map(value => (
                    
                    <p id={value.id}>{value.name}</p>
                ))}
            </div>
        </div>
        
    );
};



export default UserForm