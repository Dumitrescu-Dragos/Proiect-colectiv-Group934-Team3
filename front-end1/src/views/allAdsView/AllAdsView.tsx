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
                    <AdvertisementList pageLimit={10} advertisements={this.state.advertisements} />
                </div>
            </div>
        );
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

        RequestService.doGET(getAdsUrl,undefined,undefined,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjciLCJuYmYiOjE1NDc5MDI4MDMsImV4cCI6MTU0ODE2MjAwMywiaWF0IjoxNTQ3OTAyODAzfQ.AaD4DjkwaCG0cW5ebdg-WGis5pWIFdFESFP0RiMBMl4')!!
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
                            return ad.category === filter.categoryFilter;
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

    }
}