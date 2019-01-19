import * as React from 'react';
import Form, { IFormDropDown } from './Form';
import {Address, loginURL, registerURL, UserLogin, UserRegister} from "../../common/Client";

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
            {key: 'inviteid', label: 'InviteID', type: 'text', placeholder: 'Given invite ID'},
            {key: 'email', label: 'Email', type: 'email', placeholder: 'email@example.com'},
            {key: 'password', label: 'Password', type: 'password', placeholder: 'password'},
            {key: 're-password', label: 'Retype Password', type: 'password', placeholder: 'retype password'},
            {key: 'firstname', label: 'First Name', type: 'text', placeholder: 'first name'},
            {key: 'lastname', label: 'Last Name', type: 'text', placeholder: 'last name'},
            genderSelectProps,
            {key: 'address', label: 'Address', type: 'text', placeholder: 'address'},
            {key: 'phone', label: 'Phone', type: 'text', placeholder: 'number'},
            {key: 'birthdate', label: 'Date of birth', type: 'date', placeholder: 'birth date'},
            {key: 'terms', type: 'checkbox', label: 'Terms and conditions'},
        ]}
        onSubmit = {(formData) => {
            formData.forEach(element => {
                console.log(element);
            });
            var invite:string = '';
            var address: Address = {addressId:0, addressString:'', city:'Cluj-Napoca', country:'Romania', longitude:23, latitude:46};
            var userregister:UserRegister = {email: '', password:'', firstName:'', lastName:'', gender:0, DOB:'', phoneNumber:'', address: address};
            formData.forEach(element => {
                switch (element.key) {
                    case "inviteid": invite = element.value; break;
                    case "email": userregister.email = element.value; break;
                    case "password": userregister.password = element.value; break;
                    case "firstName": userregister.firstName = element.value; break;
                    case "lastName": userregister.lastName = element.value; break;
                    case "birthdate": userregister.DOB = element.value; break;
                    case "phone": userregister.phoneNumber = element.value; break;
                    case "address": address.addressString = element.value; break;
                    case "gender": if(element.value=="Male") userregister.gender = 0; if(element.value=="Female") userregister.gender = 1; if(element.value=="Other") userregister.gender = 2; break;
                }
            });
            userregister.address = address;

            fetch(registerURL + invite, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(userregister)
            })
                .then(res => {
                    if (res.ok) {
                        console.log("registered");
                    } else {
                        console.log("not registered\n");
                        throw Error(res.statusText);
                    }
                })
                .catch(error => console.error(error));

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

            var userlogin:UserLogin = {email: '', password:''};
            formData.forEach(element => {
                switch (element.key) {
                    case "email": userlogin.email = element.value; break;
                    case "password": userlogin.password = element.value; break;
                }
            });

            fetch(loginURL, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(userlogin)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        console.log("not logged\n");
                        throw Error(res.statusText);
                    }
                })
                .then(json => {
                    localStorage.setItem('token', json.toString());
                    console.log("logged in\n");
                    //this.props.history.push("/my-ads");
                    //return <Redirect to={'/my-ads'}/>
                })
                .catch(error => console.error(error));
        }}
    />;