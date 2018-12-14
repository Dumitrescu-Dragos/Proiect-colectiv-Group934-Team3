import * as React from 'react';
import Form, { IFormDropDown } from './Form';

/**
 * @author Maier Bogdan
 * @description Predefined Login form
 */

let genderSelectProps: IFormDropDown =  {
    key: 'gender', 
    label:'Gender', 
    type:'select', 
    valueSet: ['Male', 'Female', 'Other']
};

export let RegisterForm:JSX.Element = 
    <Form
        key = 'register-form'
        title = 'Register'
        fields = {[
            {key: 'email', label: 'Email', type: 'email', placeholder: 'email@example.com'},
            {key: 'password', label: 'Password', type: 'password', placeholder: 'password'},
            {key: 're-password', label: 'Retype Password', type: 'password', placeholder: 'retype password'},
            {key: 'firstname', label: 'First Name', type: 'text', placeholder: 'first name'},
            {key: 'lastname', label: 'Last Name', type: 'text', placeholder: 'last name'},
            genderSelectProps,
            {key: 'address', label: 'Address', type: 'text', placeholder: 'address'},
            {key: 'birthdate', label: 'Date of birth', type: 'date', placeholder: 'birth date'},
            {key: 'terms', type: 'checkbox', label: 'Terms and conditions'},
        ]}
        onSubmit = {(formData) => {
            formData.forEach(element => {
                console.log(element);
            });
            // TODO: http request for register
        }}
    />;

/**
 * @author Maier Bogdan
 * @description Predefined register form.
 */
export let LoginForm:JSX.Element = 
    <Form 
        key = 'login-form'
        title = 'Login'
        fields = {[
            {key: 'email', label: 'Email', type: 'email', placeholder: 'email'},
            {key: 'password', label: 'Password', type: 'password', placeholder: 'password'},
            {key: 'rememberMe', type: 'checkbox', label: 'Remember me'},
        ]}
        onSubmit = {(formData) => {
            formData.forEach(element => {
                console.log(element);
            });
            // TODO: http request for register
        }}
    />;