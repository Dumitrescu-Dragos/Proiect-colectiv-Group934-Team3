import * as React from 'react';
import "./AllAdsView.scss";

interface IAllAdsViewState {

}

export default class AllAdsView extends React.Component<any, IAllAdsViewState> {

    public constructor (props: any) {
        super(props);
    } 

    public render () {
        return (
            <div className='container'>
                All Ads View ...
            </div>
        );
    }

}