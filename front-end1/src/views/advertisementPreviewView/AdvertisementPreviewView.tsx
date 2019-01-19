import * as React from 'react';
import './AdvertisementPreviewView.scss'
import Header from './../../components/header/Header';
import Error from './../../components/error/Error';
import {Advertisement, Tool, getAdsUrl} from '../../common/Client';
import AdvertisementPreview from './../../components/advertismentPreview/AdvertisementPreview';
import RequestService from '../../common/RequestService';

interface IAdvertisementPreviewViewProps {
    id: number;
}

interface IAdvertisementPreviewViewState {
    ad?: Advertisement;
}

export default class MyAdsView extends React.Component<IAdvertisementPreviewViewProps, IAdvertisementPreviewViewState> {

    public constructor(props: IAdvertisementPreviewViewProps) {
        super(props);
        this.state={
            ad: undefined
        };
    }

    public componentDidMount () {
        let token: string | null = localStorage.getItem('token');
        if (token) {
            RequestService.doGET(getAdsUrl + '/' + 3, undefined, undefined, token)!!
            .then((res) => {
                console.log(res);
                let tool: Tool = res.data;
                console.log(tool);
               // this.setState({ad: tool});
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    public render() {

        let token: string | null = localStorage.getItem('token');
        if (! token) {
            return (
                <Error title='Unauthorized' value='User must be logged in to preview an ad !' />
            );
        }

        return (
            <div>
                <Header />
                <div className='container'>
                    {this.state.ad ? 
                        <AdvertisementPreview data={this.state.ad}/> :
                        <Error title='Invalid Ad' value='Something went wrong. Ad was not found.' />
                    }
                </div>
            </div>
        );
    }

}