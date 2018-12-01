import * as React from 'react' 
import Form from 'src/components/form/Form';
import axios from 'axios';

interface IStartViewProps {
}

interface IStartViewState {
}

export default class StartView extends React.Component<IStartViewProps, IStartViewState> {

    public constructor (props: IStartViewProps) {
        super(props);
    }

    public render () {
        return (
            <>
                <Form 
                    title = 'Example Form'
                    modal = {true}
                    fields = {[
                        {key: 'field1', label: 'Field 1', type: 'email', placeholder: 'Field 1 text'},
                        {key: 'field2', label: 'Field 2', type: 'password', placeholder: 'Field 2 text'},
                        {key: 'field3', label: 'Field 3', type: 'text', placeholder: 'Field 3 text'},
                        {key: 'field4', label: 'Field 4', type: 'text', placeholder: 'Field 4 text'}
                    ]}
                    onSubmit = {() => {
                        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
                            (result: any) => {
                                console.log(result);
                            }
                        );
                    }}
                    onCancel = {() => {}}
                />
            </>
        );
    }

}