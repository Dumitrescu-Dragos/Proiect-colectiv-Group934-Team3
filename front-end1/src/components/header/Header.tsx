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

    public renderHeaderButton = (label: string, url:string, loggged: boolean) => {
        var element = (<div></div>);
        if(localStorage.getItem("token")!=null || loggged == false)
        {
            element = (<a href={url} className='header-button'><div>
                    {label}
                </div></a>
                );
        }
        return element;
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
        const logoImage="/assets/images/OSC_Black.png";
        return (
            <header>
                <a href={"/"}>

                    <img src={logoImage} className='logo'/>
                </a>
                <div className='nav'>
                    {this.renderHeaderButton('Browse', "/all-ads", false)}
                    {this.renderHeaderButton('My Ads', "/my-ads", true)}
                    {this.renderHeaderButton('Profile', "/", true)}
                    {this.renderLogOutButton()}
                </div>
            </header>
        );
    }

}