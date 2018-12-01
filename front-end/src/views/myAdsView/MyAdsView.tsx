import * as React from 'react';

interface IMyAdsViewState {

}

export default class MyAdsView extends React.Component<any, IMyAdsViewState> {

    public constructor (props: any) {
        super(props);
    } 

    public render () {
        return (
            <div className='container'>
                My Ads View ...
            </div>
        );
    }

}