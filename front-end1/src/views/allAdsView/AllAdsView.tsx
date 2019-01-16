import * as React from 'react';
import "./AllAdsView.scss";
import { Advertisement, Category, Tool } from '../../common/Client';
import Header from './../../components/header/Header';
import AdvertisementList from './../../components/advertisementList/AdvertisementList';
import FilterManager from '../../components/filterManager/FilterManager';
import { FilterObject } from '../../common/Client';
import { Address } from 'cluster';



interface IState {
    advertisements: Advertisement[];
    categories: Category[];
    filter: FilterObject;
}

export default class AllAdsView extends React.Component<any, IState> {

    public constructor(props: any) {
        super(props);
        const categories = this.loadCategories();
        this.state = {
            advertisements: [],
            categories: categories,
            filter: {
                searchFilter: null,
                availableFilter: false,
                categoryFilter: null
            }
        }
    }

    public componentDidUpdate(prevProp: any, prevState: IState){
        console.log(prevState);
        console.log(this.state);
        if (prevState.filter !== this.state.filter) {
            this.loadAdsFromServer();
        }
    }

    public componentWillMount(){
        this.loadAdsFromServer();
    }

    public render() {
        return (
            <div className="all-ads">
                <Header />
                <div className='container'>
                    <FilterManager filter={this.state.filter} categories={this.state.categories} updateFunc={this.updateFilter.bind(this)}/>
                    <AdvertisementList pageLimit={10} advertisements={this.state.advertisements} />
                </div>
            </div>
        );
    }

    private loadCategories = (): Category[] => {
        let categories: Category[] = [
            { id: 1, name: "Sport", description: "Equipment and devices related to sport" },
            { id: 2, name: "Manual Work", description: "Equipment and devices related to manual work" },
            { id: 3, name: "Vehicles", description: "Different kinds of vehicles" },
        ];

        return categories;
    }

    private updateFilter = (filter: FilterObject) => {
        this.setState({
            filter: filter
        });
    }


    private loadAdsFromServer = () => {
        let data: Advertisement[] = [];
        const filter: FilterObject = this.state.filter;
        console.log(filter);

        let tools: Tool[] = [{
            id: 1,
            name: "Craftsman 9-41584 1/4",
            isAvailable: true,
            techSpec: "The tool has the following tech specs",
            imageUrls: ["https://images-na.ssl-images-amazon.com/images/I/61i5G6kx3CL._SL1500_.jpg"]
        },
        {
            id: 2,
            name: "Dalluge 7180",
            isAvailable: false,
            techSpec: "16 Ounce Titanium Hammer",
            imageUrls: ["https://res.cloudinary.com/outcastdevs/image/upload/v1546370836/71YBKac64BL._SX425_.jpg"]
        }];

        let types: string[] = ["Hobby", "Professional"];

        for (let i = 0; i < 97; i++) {
            let element: Advertisement = {
                id: i,
                title: "Title - a resource " + i,
                category: this.state.categories[i % 3],
                type: types[i % 2],
                tool: tools[i%2],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis sem, bibendum sit amet ornare eu, tincidunt vitae lectus. Etiam condimentum, massa in venenatis tristique, tellus ligula feugiat nisi, sit amet lacinia nisi odio et justo. Proin placerat lorem sed quam maximus accumsan. Curabitur rhoncus maximus urna.",
            }
            data.push(element);
        }

        if(filter.searchFilter){
            data = data.filter((ad)=>{
                if(ad.title != undefined){
                    return ad.title.includes(filter.searchFilter!!)
                }
                return false;
            })
        }

        if(filter.categoryFilter){
            data = data.filter((ad) => {
                if(ad.category != undefined){
                    return ad.category === filter.categoryFilter;
                }
                return false;
            })
        }

        if(filter.availableFilter){
            data = data.filter((ad) => {
                if(ad.tool != undefined){
                    return ad.tool.isAvailable === true;
                }
                return false;
            })
        }

        console.log(data.length);

        this.setState({advertisements: data});
    }
}