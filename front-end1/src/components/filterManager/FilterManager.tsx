import * as React from 'react'
import './FilterManager.scss';
import { ReactComponent } from '*.svg';
import { Category, FilterObject } from '../../common/Client';

interface IProps {
    categories: Category[];
    filter: FilterObject;
    updateFunc: any;
}

interface IState {
    filter: FilterObject;
}

class FilterManager extends React.Component<IProps, IState> {

    public constructor(props: IProps){
        super(props);
        this.state = {
            filter: props.filter
        }
    }

    public componentDidUpdate(prevProps: IProps, prevState: IState){
        if(prevState.filter !== this.state.filter){
            this.updateData()
        }
    }

    public render() {
        return (
            <div className="filter-manager">
                <div className="content">
                    <div className="main-filters">
                        <div className="search-field">
                            <input type="text" className="input-field" placeholder="Search" onChange={this.searchChangeHandler} value={this.state.filter.searchFilter == null ? undefined : this.state.filter.searchFilter}/>
                        </div>
                        <div className="distance-field">
                            <input type="text" className="input-field" placeholder="Location"/>
                            <select className="distance-list input-field">
                                <option>+0 km</option>
                                <option>+2 km</option>
                                <option>+5 km</option>
                                <option>+10 km</option>
                                <option>+20 km</option>
                            </select>
                        </div>
                        <div className="categories-dropdown">
                            <select className="input-field" onChange={this.categoryChangeHandler}>
                                <option value="-1">All categories</option>
                                {this.props.categories.map(c => {
                                    return <option value={c.categoryId} key={c.categoryId}>{c.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="other-filters">
                        <div className="available-field">
                            <label className="container"> 
                                <input type="checkbox" checked={this.state.filter.availableFilter} onChange={this.availableChangeHandler}/>
                                <span className="checkmark"></span>
                                Only Available
                            </label>
                        </div>
                        <div>
                            <button className="search-btn" onClick={this.updateData}>Search</button>
                        </div>
                    </div>
                    <div className="filter-buttons">
                    </div>
                </div>
            </div>
        );
    }

    private categoryChangeHandler = (event: any) => {
        const categoryId: number = event.target.value;
        let category: Category | undefined = this.props.categories.find(cat=>cat.categoryId == categoryId);
        const filterCopy = {...this.state.filter}
        if(category != undefined && category.name !== undefined){
            filterCopy.categoryFilter = category.name;
        }else{
            filterCopy.categoryFilter = null;
        }
        this.setState({
            filter: filterCopy
        })
    }

    private availableChangeHandler = () =>{
        const filterCopy = {...this.state.filter}
        filterCopy.availableFilter = !filterCopy.availableFilter;
        this.setState({
            filter: filterCopy
        })
    }

    private searchChangeHandler = (event: any) =>{
        const filterCopy = {...this.state.filter}
        filterCopy.searchFilter = event.target.value;
        this.setState({
            filter: filterCopy
        });
    }

    private updateData = () => {
        this.props.updateFunc(this.state.filter);
    }
}

export default FilterManager;