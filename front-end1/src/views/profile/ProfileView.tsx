import * as React from 'react';
import "./ProfileView.scss";
import {Category, Tool, getAdsUrl, User, getUserURL, Address, UserRegister} from '../../common/Client';
import Header from './../../components/header/Header';
import FilterManager from '../../components/filterManager/FilterManager';
import { FilterObject } from '../../common/Client';
import RequestService from '../../common/RequestService';
import { getCategoriesUrl } from '../../common/Client';



interface IState {
    //address: Address;
    user: User;
    error?: string;
}

export default class ProfileView extends React.Component<any, IState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            //address: {addressId:0, addressString:'', city:'Cluj-Napoca', country:'Romania', longitude:23, latitude:46},
            user: {id:0, email: '', password:'', firstName:'', lastName:'', gender:"male", DOB:'', phoneNumber:'', address: {addressId:0, addressString:'', city:'Cluj-Napoca', country:'Romania', longitude:23, latitude:46}}

        }
    }

    public componentDidMount() {
        this.loadUserFromServer();
    }

    public render() {
        return (
            <div className="profile">
                <Header />
                <div className='container'>
                    <p>Email : {this.state.user.email}</p>
                    <p>First name : {this.state.user.firstName}</p>
                    <p>Last name : {this.state.user.lastName}</p>
                    <p>Birth date : {this.state.user.DOB}</p>
                    <p>Gender : {this.state.user.gender}</p>
                    <p>Phone : {this.state.user.phoneNumber}</p>
                </div>
            </div>
        );
    }

    private loadUserFromServer = () => {
        let token: string | null = localStorage.getItem('token');
        console.log('token', token);
        if (token !== null) {
            RequestService.doGET(getUserURL+"-1", undefined, undefined, token)!!
                .then((res: any) => {
                    let data: User = res.data;
            
                    this.setState({ user: data });

                })
                .catch((err)=>{
                    console.error(err);
                })
        } else {
            this.setState({error: 'You must login to see users !'});
        }

    }
}