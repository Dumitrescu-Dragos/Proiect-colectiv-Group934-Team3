import * as React from 'react';
import Header from '../../components/header/Header';
import { Advertisement } from '../../common/Client';
import RequestService from '../../common/RequestService';

interface IAddAdsViewProps {
    
}

interface IAddAdsViewState {

}

export default class AddAdsView extends React.Component<IAddAdsViewProps, IAddAdsViewState> {

    public constructor (props: IAddAdsViewProps) {
        super(props);
    }

    private postAd (ad: Advertisement) {
        
    }

    render() {
        return (
            <div className="add-ads">
                <Header />
                <div className='container'>
                    
                </div>
            </div>
        ); 
    }

}