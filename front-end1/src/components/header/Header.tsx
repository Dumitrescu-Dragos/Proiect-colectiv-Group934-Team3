import * as React from 'react';
import './Header.scss';

interface IHeaderProps {

}

interface IHeaderState {

}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {

    public constructor (props: IHeaderProps) {
        super(props);
    }

    public renderHeaderButton = (label: string) => {
        return (
            <div className='header-button'>
                {label}
            </div>
        );
    }

    public renderLogOutButton = () =>{
        var element = (<h1>Logged out</h1>);
        if(localStorage.getItem("token")!=null)
        {
            element = (<a href='/logout'>Logout</a>);
        }
        return element;
    }

    public render () {
        return (
            <header>
                <div className='logo'>
                    LOGO HERE
                </div>
                <div className='nav'>
                    {this.renderHeaderButton('HeaderButton1')}
                    {this.renderHeaderButton('HeaderButton2')}
                    {this.renderHeaderButton('HeaderButton3')}
                    {this.renderLogOutButton()}
                </div>
            </header>
        );
    }

}