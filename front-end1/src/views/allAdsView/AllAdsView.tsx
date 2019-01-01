import * as React from 'react';
import "./AllAdsView.scss";
import { Advertisement, Category, Tool } from '../../common/Client';
import Header from './../../components/header/Header';
import AdvertisementList from './../../components/advertisementList/AdvertisementList';

export interface FilterObject {
    categories: Category[];
    selectedCategory?: Category;
    filters: string[];
    searchedString?: string;
}

interface IAllAdsViewState {
    advertisements: Advertisement[];
    filter: FilterObject;
}

export default class AllAdsView extends React.Component<any, IAllAdsViewState> {

    public constructor(props: any) {
        super(props);
        const categories = this.loadCategories();
        this.state = {
            advertisements: [],
            filter: {
                categories: categories,
                filters: [],
            }
        }
    }

    public componentWillMount() {
        this.loadAdsFromServerTest();
    }

    public render() {
        return (
            <div className="all-ads">
                <Header />
                <div className='container'>
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


    private loadAdsFromServerTest = () => {
        let data: Advertisement[] = [];

        let tool: Tool = {
            id: 1,
            name: "ScrewDriver X200",
            isAvailable: true,
            techSpec: "The tool has the following tech specs",
            imageUrls: []
        }

        let types: string[] = ["Hobby", "Professional"];

        for (let i = 0; i < 100; i++) {
            let element: Advertisement = {
                id: i,
                title: "Title " + i,
                category: this.state.filter.categories[i % 3],
                type: types[i % 2],
                tool: tool,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis sem, bibendum sit amet ornare eu, tincidunt vitae lectus. Etiam condimentum, massa in venenatis tristique, tellus ligula feugiat nisi, sit amet lacinia nisi odio et justo. Proin placerat lorem sed quam maximus accumsan. Curabitur rhoncus maximus urna.",
            }
            data.push(element);
        }

        this.setState({advertisements: data});
    }
}