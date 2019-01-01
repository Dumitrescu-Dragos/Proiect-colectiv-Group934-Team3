import * as React from 'react';
import './MyAdsView.scss'
import Header from './../../components/header/Header';

interface IMyAdsViewState {

}

export default class MyAdsView extends React.Component<any, IMyAdsViewState> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Header />
                <div className='container'>

                    My Ads View ...
                </div>
            </div>
        );
    }

}