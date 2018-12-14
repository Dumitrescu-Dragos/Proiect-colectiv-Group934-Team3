import * as React from 'react';

interface ISelectProps {
    // List of all possible options to sellect.
    dataSource: string[];
    // Current value sellected.
    value?: string;

    /**
     * Callback method that triggers when the select value is changed.
     * @param value -> the new value of the select.
     */
    onChange: (value?: string) => void;
}

/**
 * @author Bogdan Maier
 */
export default class Select extends React.Component<ISelectProps> {

    public constructor (props: ISelectProps) {
        super(props);
    }

    public onChange = (event: any) => {
        this.props.onChange(event.target.value);
    }

    public render() {
        return (
            <div className='select-container'>
                <select onChange={this.onChange}>
                    {this.renderOptions(this.props.dataSource)}
                </select>
            </div>
        );
    }

    private renderOptions = (dataSource: string[]):JSX.Element => {
        return (
            <> 
                { 
                    dataSource.map( (value) => { 
                        return (<option key={'select_' + value} value={value}> {value} </option>); 
                    }) 
                } 
            </>
        );
    }

}