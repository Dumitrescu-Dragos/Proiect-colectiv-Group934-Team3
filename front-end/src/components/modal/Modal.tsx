import * as React from 'react';

interface IModalProps {
    content: JSX.Element;
}

/**
 * @author Bogdan Maier
 * @description Component that renders its content as a modal
 * @todo add close button and functionality 
 */
export default class Modal extends React.Component<IModalProps> {

    public constructor (props: IModalProps) {
        super(props);
    }

    public render () {
        return (
            <div className='modal'>
                <div className='modal-content'>
                    {this.props.content}
                </div>
            </div>
        );
    }

}