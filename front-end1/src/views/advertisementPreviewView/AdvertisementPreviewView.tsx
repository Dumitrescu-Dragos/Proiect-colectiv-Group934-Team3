import * as React from 'react';
import './AdvertisementPreviewView.scss'
import Header from './../../components/header/Header';
import Error from './../../components/error/Error';
import {Advertisement, Tool, getAdsUrl} from '../../common/Client';
import AdvertisementPreview from './../../components/advertismentPreview/AdvertisementPreview';
import RequestService from '../../common/RequestService';
import { withRouter } from 'react-router-dom';

interface IAdvertisementPreviewViewState {
    ad?: Advertisement;
}

class MyAdsView extends React.Component<any, IAdvertisementPreviewViewState> {



    public constructor(props: any) {
        super(props);
        const {location} = this.props;
        this.state={
            ad: location.state
        };
    }

    public componentDidMount () {
        // let token: string | null = localStorage.getItem('token');
        // if (token) {
        //     RequestService.doGET(getAdsUrl + '/' + 3, undefined, undefined, token)!!
        //     .then((res) => {
        //         console.log(res);
        //         let tool: Tool = res.data;
        //         console.log(tool);
        //        // this.setState({ad: tool});
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // }
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

export default withRouter(MyAdsView);