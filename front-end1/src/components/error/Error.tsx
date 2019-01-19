import * as React from 'react';

interface IErrorProps {
    title: string;
    value: string;
    onCloseClick?: () => void;
}

export default class Error extends React.Component<IErrorProps, any> {
    
    /**
     * constructor
     */
    public constructor(props: IErrorProps) {
        super(props);
    }

    /**
     * render
     */
    public render() {
        return (
            <div className='m-error'>
                <h2> {this.props.title} </h2>
                <hr />
                <p> {this.props.value} </p>
            </div>
        );
    }

}