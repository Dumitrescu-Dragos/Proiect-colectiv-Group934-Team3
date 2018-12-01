import * as React from 'react';

export interface IFormField {
    key: string;
    label?: string;
    type: 'text' | 'password' | 'email' | 'checkbox';
    placeholder?: string;
    value?: string;
}

interface FormData {
    key: string;
    value: string;
}

interface IFormProps {
    title: string;
    fields: IFormField[];
    onSubmit: () => void;
    onCancel: () => void;
}

interface IFormState {
    formData: FormData[];
}

/**
 *  @author Bogdan Maier
    @example 
    <Form 
        title = 'Example Form'
        fields = {[
            {key: 'field1', label: 'Field 1', type: 'email', placeholder: 'Field 1 text'},
            {key: 'field2', label: 'Field 2', type: 'password', placeholder: 'Field 2 text'},
            {key: 'field3', label: 'Field 3', type: 'text', placeholder: 'Field 3 text'},
            {key: 'field4', label: 'Field 4', type: 'text', placeholder: 'Field 4 text'}
        ]}
        onSubmit = {() => {
            // Code that is executed before the form is submited
        }}
        onCancel = {() => {
            // Code that is executed when the close button is clicked
        }}
    />
 * 
 */

export default class Form extends React.Component<IFormProps, IFormState> {

    public constructor (props: IFormProps) {
        super(props);

        let formData: FormData[] = new Array();

        this.props.fields.forEach((field: IFormField) => {
            formData.push({
                key: field.key,
                value: field.value !== undefined ? field.value : ''
            });
        });

        this.state = {
            formData: formData
        };
    }

    private onFieldChanged = (key: string, value: string) => {
        let newFormData: FormData[] = this.state.formData;
        newFormData.forEach((formData: FormData) => {
            if (formData.key === key)
                formData.value = value;
        });
        this.setState({
            formData: newFormData
        });
    }

    private renderFromField = (formField: IFormField) => { 

        let fieldLabel: JSX.Element = (                
            <> </>
        );

        if (formField.label !== undefined) {
            fieldLabel = (
                <div className='form-field-label'>
                    {formField.label}
                </div>
            );
        }

        let className: string = 'form-field-input';
        if (formField.type === 'checkbox')
            className = 'form-field-checkbox';

        return (
            <div className='form-field' key={formField.key}>
                {fieldLabel}
                <input 
                    className={className}
                    type={formField.type} 
                    placeholder={formField.placeholder !== undefined ? formField.placeholder : ''} 
                    onChange={(event: any) => {
                        this.onFieldChanged(formField.key, event.target.value)
                    }}
                />
            </div>
        ); 
    }

    private renderFromFields = (): JSX.Element[] => {
        let returnValue: JSX.Element[] = new Array();

        this.props.fields.forEach((field:IFormField) => {
            returnValue.push(this.renderFromField(field));
        });

        return returnValue;
    }

    private onSubmit = () => {
        this.props.onSubmit();
    }

    public render () {

        let className: string = 'form shadow';

        return (
            <form className={className}>
                <div className='form-title'>
                    {this.props.title}
                </div>
                <hr />
                <div className='from-field-container'>
                    {this.renderFromFields()}
                </div>
                <hr />
                <button className='button' type='button' onClick={this.onSubmit}> Submit </button>
            </form>
        ); 
    }

}