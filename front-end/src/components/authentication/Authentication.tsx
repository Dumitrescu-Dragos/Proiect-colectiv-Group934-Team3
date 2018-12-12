import * as React from 'react'
import { LoginForm, RegisterForm } from '../form/StaticForms';
// import axios from 'axios';

export type TabType = 'login' | 'register';

interface IAuthenticationProps {
    tabToRender ?: TabType;
}

interface IAuthenticationState {
    tabToRender: TabType;
}

/**
 * @author Maier Bogdan
 */
export default class AuthemticationView extends React.Component <IAuthenticationProps, IAuthenticationState> {

    public constructor (props: IAuthenticationProps) {
        super(props);

        this.state = {
            tabToRender: this.props.tabToRender !== undefined ? this.props.tabToRender : 'login',
        };
    }

    public changeTab (tab:TabType) {
        this.setState({
            tabToRender: tab
        });
    }

    public render () {

        let tabButtonClass: string = 'tab-button';

        // Predefined login form from ../components/form/StaticFroms
        let loginForm = LoginForm;
        // Predefined register form from ../components/form/StaticFroms
        let registerForm = RegisterForm;

        return (
            <div className='auth-view'>
                <div className='tabs'> 
                    <div className={this.state.tabToRender === 'login' ? tabButtonClass + ' sellected' : tabButtonClass} onClick={() => {this.changeTab('login')}}>
                        Login
                    </div>
                    <div className={this.state.tabToRender === 'register' ? tabButtonClass + ' sellected' : tabButtonClass} onClick={() => {this.changeTab('register')}}>
                        Register 
                    </div>
                </div>
                <div className='content'>
                    {this.state.tabToRender === 'login' ? loginForm : registerForm} 
                </div>
            </div>
        );
    }

}