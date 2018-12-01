import * as React from 'react'
import Form from '../form/Form';
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
            tabToRender: this.props.tabToRender !== undefined ? this.props.tabToRender : 'login'
        };
    }

    public changeTab (tab:TabType) {
        this.setState({
            tabToRender: tab
        });
    }

    public render () {

        let content: JSX.Element = this.renderLoginForm();

        if (this.state.tabToRender === 'register') 
            content = this.renderRegisterForm();

        let tabButtonClass: string = 'tab-button';

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
                    {content}
                </div>
            </div>
        );
    }

    private renderLoginForm = ():JSX.Element => {
        return (
            <Form 
                title = 'Login'
                fields = {[
                    {key: 'email', label: 'Email', type: 'email', placeholder: 'email'},
                    {key: 'password', label: 'Password', type: 'password', placeholder: 'password'},
                    {key: 'rememberMe', type: 'checkbox', label: 'Remember me'},
                ]}
                onSubmit = {() => {
                    // TODO: http request for login
                }}
                onCancel = {() => {}}
            />
        );
    }

    private renderRegisterForm = ():JSX.Element => {
        return (
            <Form 
                title = 'Register'
                fields = {[
                    {key: 'email', label: 'Email', type: 'email', placeholder: 'email'},
                    {key: 'password', label: 'Password', type: 'password', placeholder: 'password'},
                    {key: 'firstname', label: 'First Name', type: 'text', placeholder: 'first name'},
                    {key: 'lastname', label: 'Last Name', type: 'text', placeholder: 'last name'},
                    {key: 'whatever', label: 'Whatever', type: 'text', placeholder: 'whatever'},
                ]}
                onSubmit = {() => {
                    // TODO: http request for register
                }}
                onCancel = {() => {}}
            />
        );
    }

}