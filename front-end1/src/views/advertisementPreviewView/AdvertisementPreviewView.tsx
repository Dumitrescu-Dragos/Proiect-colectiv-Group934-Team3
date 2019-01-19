import * as React from 'react';
import './AdvertisementPreviewView.scss'
import Header from './../../components/header/Header';
import {Advertisement, Tool} from '../../common/Client';
import AdvertisementPreview from './../../components/advertismentPreview/AdvertisementPreview';

interface IAdvertisementPreviewViewState {
    ad: Advertisement;
}

export default class MyAdsView extends React.Component<any, IAdvertisementPreviewViewState> {

    public constructor(props: any) {
        super(props);
        let tool: Tool = {
            id: 1,
            name: "Craftsman 9-41584 1/4",
            isAvailable: true,
            techSpec: "The tool has the following tech specs",
            imageUrls: ["https://images-na.ssl-images-amazon.com/images/I/61i5G6kx3CL._SL1500_.jpg"]
        }
        this.state={
            ad: {
                id: 1,
                title: "ad 1",
                description: "description for ad 1",
                type: "hobby",
                tool: tool,
                ownersName: "gigi",
                category: undefined,
                periodOfTime: 100,
                rentalConditions: "da",
                returnRequirements: "da"
            }
        }
    }

    public render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <AdvertisementPreview data={this.state.ad}/>
                </div>
            </div>
        );
    }

}