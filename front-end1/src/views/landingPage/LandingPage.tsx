import * as React from 'react';
import AuthenticationView from './../../components/authentication/Authentication';
import './LandingPage.scss';
import Header from './../../components/header/Header';

interface ILandingPageProps {

}

interface ILandingPageState {

}

export default class LandingPage extends React.Component<ILandingPageProps, ILandingPageState> {

    public constructor(props: ILandingPageProps) {
        super(props);
    }

    public renderAuthorization = () => {
        var element = (<div></div>);
        if (localStorage.getItem("token") == null) {
            element = (
                <div className='right landing-page-dialog'>
                    <AuthenticationView />
                </div>);
        }
        return element;
    }

    public render() {
        return (
            <div className='landing-page'>
                <Header />
                <div className='container'>
                    <div className='left landing-page-content'>
                        <div>
                            <h1> Hello there </h1>
                            <h3> Welcome to OSC </h3>
                            <p> OSC is a magnificent web application that is designed for a small, honest group of users. It helps its users find certain tools nearby and rent them. Also OSC allows its users to share their own tools.</p>
                        </div>
                    </div>
                    {this.renderAuthorization()}
                </div>
            </div>
        );
    }

}

