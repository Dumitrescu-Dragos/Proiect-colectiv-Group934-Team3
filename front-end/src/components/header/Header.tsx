import * as React from 'react';

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
                </div>
            </header>
        );
    }

}