import * as React from 'react';
import './MyAdsView.scss'
import Header from './../../components/header/Header';
import FilterManager from "../../components/filterManager/FilterManager";
import AdvertisementList from "../../components/advertisementList/AdvertisementList";
import {Advertisement, Category, FilterObject, getAdsUrl, getmyAdsUrl} from "../../common/Client";
import RequestService from "../../common/RequestService";

interface IMyAdsViewState {
    advertisements: Advertisement[];
    error?: string;

}

export default class MyAdsView extends React.Component<any, IMyAdsViewState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            advertisements: []
        }
    }

    public componentDidMount() {
        this.loadAdsFromServer();
    }

    public render() {
        return (
            <div className="my-ads">
                <Header />
                <div className='container'>
                    {this.state.error ? <h1 className='error'> {this.state.error} </h1> : <> </>}
                    <AdvertisementList pageLimit={10} advertisements={this.state.advertisements} clickAdMethod={this.clickAdHandler} />
                </div>
            </div>
        );
    }

    private clickAdHandler = (ad: Advertisement) =>{
        console.log(ad);
        this.props.history.push('/ad-preview', {...ad});
    }
    private loadAdsFromServer = () => {
        let token: string | null = localStorage.getItem('token');
        console.log('token', token);
        if (token !== null) {
            RequestService.doGET(getmyAdsUrl+"-1", undefined, undefined, token)!!
                .then((res: any) => {
                    let data: Advertisement[] = res.data;

                    this.setState({ advertisements: data });

                })
                .catch((err)=>{
                    console.error(err);
                })
        } else {
            this.setState({error: 'You must login to see all ads !'});
        }

    }

}