import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useField } from 'formik';

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return(
    <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props}>
          {props.avaibleTimes.map(x => (<option>{x}</option>))}
       </select>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
    </>
  );
}

export default function BookFormik(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [time, setTime] = useState("no time");
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', date: '', time: '', guests: 1, occasion: 'none' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        date: Yup.string().required('Required'),
        time: Yup.string().required('Required'),
        guests: Yup.number().min(1, 'Must be at least 1').max(10, 'No more then 10'),
        occasion: Yup.string()
      })}
      onSubmit={(values) => {
        props.setAvaibleTimes({ type: values.time });
        navigate("/confirm");
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="date">Choose date</label>
        <Field name="date" type="date" />
        <ErrorMessage name="date" />

        <MySelect name="time" avaibleTimes={props.avaibleTimes} label="Choose time" />

        <label htmlFor="guests">Number of guests</label>
        <Field name="guests" type="number" />
        <ErrorMessage name="guests" />

        <label htmlFor="occasion">Choose occasion</label>
        <Field name="occasion" as="select">
          <option value='none'>-none-</option>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </Field>
        <ErrorMessage name="occasion" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}