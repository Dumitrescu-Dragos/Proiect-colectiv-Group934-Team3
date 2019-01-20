import * as React from 'react'
import './AdvertisementList.scss';
import AdvertisementCard from './../advertisementCard/AdvertisementCard';
import { Advertisement } from '../../common/Client';
import ReactPaginate from 'react-paginate';

interface IProps {
    advertisements: Advertisement[];
    pageLimit: number;
    clickAdMethod: any;
}

interface IState {
    currentPageAdvertisements: Advertisement[];
    offset: number;
    pageCount?: number;
    pageLimit: number;
}

class AdvertisementList extends React.Component<IProps, IState>{
    public constructor(props: any) {
        super(props);
        this.state = {
            currentPageAdvertisements:  [],
            offset: 0,
            pageLimit: this.props.pageLimit
        }
    }

    private handlePageClick = (data: any) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.pageLimit);

        this.setState({ offset: offset },()=>{
            this.setState({
                offset: 0,
                pageLimit: this.props.pageLimit
            })
            this.loadPageData();
        });
    };
    
    public componentDidUpdate(prevProps: IProps, prevState: IState) {
        let array1: Advertisement[] = this.props.advertisements;
        let array2: Advertisement[] = prevProps.advertisements;
        let equality: boolean = array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]});
        if(!equality){
            this.loadPageData();
        }
    }

    public componentWillMount() {
        this.loadPageData();
    }

    private loadPageData = () =>{
        const data = this.props.advertisements;

        const limit = this.state.pageLimit;
        const offset = this.state.offset;

        const selectedData: Advertisement[] = data.slice(offset, offset+limit);

        window.scrollTo(0,50);
        this.setState({ currentPageAdvertisements: selectedData, pageCount: Math.ceil(data.length / limit) });
    }

    public render() {
        return (
            <div className="main-ad-list">
                <div className="ad-list">
                    {this.state.currentPageAdvertisements.map(ad => (<AdvertisementCard key={ad.id} data={ad} clickMethod={this.props.clickAdMethod.bind(this, ad)}/>))}
                </div>
                {this.props.pageLimit < this.props.advertisements.length ? <div className="paginate">
                        <ReactPaginate previousLabel={"<< previous"}
                            nextLabel={"next >>"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount !== undefined ? this.state.pageCount : 0}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            activeClassName={"active"} />
                    </div> : null}
            </div>
        );
    }
}

export default AdvertisementList;