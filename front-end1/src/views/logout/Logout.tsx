import * as React from 'react';
import './Logout.scss';
import {Redirect} from "react-router";

interface ILogoutPageProps {

}

interface ILogoutPageState {

}

export default class LogoutPage extends React.Component<ILogoutPageProps, ILogoutPageState> {

    public constructor(props: ILogoutPageProps) {
        super(props);
    }

    componentWillMount() {
        localStorage.removeItem("token");
    }

    render() {
        return(
        <Redirect to="/" />
    );
    }

}

