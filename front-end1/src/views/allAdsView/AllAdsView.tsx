import * as React from 'react';
import "./AllAdsView.scss";
import { Advertisement, Category, Tool, getAdsUrl } from '../../common/Client';
import Header from './../../components/header/Header';
import AdvertisementList from './../../components/advertisementList/AdvertisementList';
import FilterManager from '../../components/filterManager/FilterManager';
import { FilterObject } from '../../common/Client';
import RequestService from '../../common/RequestService';
import { getCategoriesUrl } from '../../common/Client';



interface IState {
    advertisements: Advertisement[];
    categories: Category[];
    filter: FilterObject;
    error?: string;
}

export default class AllAdsView extends React.Component<any, IState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            advertisements: [],
            categories: [],
            filter: {
                searchFilter: null,
                availableFilter: false,
                categoryFilter: null
            }            
        }
    }

    public componentDidUpdate(prevProp: any, prevState: IState) {
        if (prevState.filter !== this.state.filter) {
            this.loadAdsFromServer();
        }
    }

    public componentDidMount() {
        this.loadCategories();
        this.loadAdsFromServer();
    }

    public render() {
        return (
            <div className="all-ads">
                <Header />
                <div className='container'>
                    <FilterManager filter={this.state.filter} categories={this.state.categories} updateFunc={this.updateFilter.bind(this)} />
                    {this.state.error ? <h1 className='error'> {this.state.error} </h1> : <> </>}
                    <AdvertisementList pageLimit={10} advertisements={this.state.advertisements} clickAdMethod={this.clickAdHandler}/>
                </div>
            </div>
        );
    }

    private clickAdHandler = (ad: Advertisement) =>{
        console.log(ad);
        this.props.history.push('/ad-preview', {...ad});
    }

    private loadCategories = () => {
        RequestService.doGET(getCategoriesUrl)!!
            .then((res) => {
                console.log("Category!", res);
                const categories: Category[] = res.data;
                this.setState({
                    categories: categories
                });
            })
            .catch((err)=>{
                console.error(err);
            })
    }

    private updateFilter = (filter: FilterObject) => {
        this.setState({
            filter: filter
        });
    }


    private loadAdsFromServer = () => {
        let token: string | null = localStorage.getItem('token');
        console.log('token', token);
        if (token !== null) {
            RequestService.doGET(getAdsUrl, undefined, undefined, token)!!
                .then((res: any) => {
                    let data: Advertisement[] = res.data;
                    const filter: FilterObject = this.state.filter;

                    if (filter.searchFilter) {
                        data = data.filter((ad) => {
                            if (ad.title != undefined) {
                                return ad.title.includes(filter.searchFilter!!)
                            }
                            return false;
                        })
                    }
            
                    if (filter.categoryFilter) {
                        data = data.filter((ad) => {
                            if (ad.category != undefined) {
                                return ad.category.name === filter.categoryFilter;
                            }
                            return false;
                        })
                    }
            
                    if (filter.availableFilter) {
                        data = data.filter((ad) => {
                            if (ad.tool != undefined) {
                                return ad.tool.isAvailable === true;
                            }
                            return false;
                        })
                    }
            
            
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