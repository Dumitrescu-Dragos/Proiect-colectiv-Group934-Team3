import * as React from 'react';
import './AdvertisementPreviewView.scss'
import Header from './../../components/header/Header';
import Error from './../../components/error/Error';
import {Advertisement, Tool, getAdsUrl, putTool} from '../../common/Client';
import AdvertisementPreview from './../../components/advertismentPreview/AdvertisementPreview';
import RequestService from '../../common/RequestService';
import { withRouter } from 'react-router-dom';

interface IAdvertisementPreviewViewState {
    ad?: Advertisement;
    error?: string;
}

class MyAdsView extends React.Component<any, IAdvertisementPreviewViewState> {



    public constructor(props: any) {
        super(props);
        const {location} = this.props;
        console.log(location);
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
                {this.state.error ? <Error title='Failed to update ad' value={this.state.error} /> : <> </> }
                <div className='container'>
                    {this.state.ad ? 
                        <AdvertisementPreview data={this.state.ad} updateStatusClick={() => {
                            if (this.state.ad && token && this.state.ad.tool) {
                                let ad: Advertisement = this.state.ad;
                                if (ad.tool) {
                                    ad.tool.isAvailable = ! ad.tool.isAvailable;
                                    RequestService.doUPDATE(putTool + '/' + ad.id, {
                                        "ToolId": ad.tool.toolId,
                                        "Name": ad.tool.name,
                                        "TechSpecs": ad.tool.techSpec,
                                        "IsAvailable": ad.tool.isAvailable
                                    }, token)!!
                                    .then((res) => {
                                        this.setState({ad: ad});
                                    })
                                        .catch((err) => {this.setState({error: "You can not modify the state for this ad."})});
                                }

                            }
                        }}/> :
                        <Error title='Invalid Ad' value='Something went wrong. Ad was not found.' />
                    }
                </div>
            </div>
        );
    }

}

export default withRouter(MyAdsView);