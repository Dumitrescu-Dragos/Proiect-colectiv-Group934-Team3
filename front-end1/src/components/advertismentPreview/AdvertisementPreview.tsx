import * as React from 'react'
import './AdvertisementPreview.scss';
import { Advertisement, Tool } from '../../common/Client';

interface IProps{
    data: Advertisement
}

const advertisementPreview = (props: IProps) => {
    const advertisement: Advertisement = props.data;
    const tool: Tool | undefined = advertisement.tool !== undefined? advertisement.tool : undefined;
    const placeholderImage="./../../../../../assets/images/placeholder-image.jpg";

    return (
        <div className="advertisement-preview">
            <div className="ad-image">
                <img src={ tool!== undefined && tool.imageUrls !== undefined && tool.imageUrls.length > 0 ? tool.imageUrls[0] : placeholderImage}/>
            </div>
            <div className="ad-content">
                <h2 className="ad-title">{advertisement.title}</h2>
                <h3 className="ad-owner">Owner info: {advertisement.ownersName}</h3>
                <div className="ad-role">
                    <span className="ad-category">{advertisement.category !==undefined ? advertisement.category.name : null}</span>
                    <span className="ad-delimiter">-</span>
                    <span className="ad-type">{advertisement.type}</span>
                </div>
                <div className="ad-description">
                    {advertisement.description !=undefined ? advertisement.description : null}
                </div>
                <div className="ad-tool-spec">
                    {tool !== undefined ?
                        <span> {tool.techSpec} </span> :
                        null
                    }
                </div>
                <div className="ad-status">
                    {tool !== undefined && tool.isAvailable ?
                        <div className="available">Available <span className="material-icons">check</span></div> :
                        <span className="unavailable">Unavailable<span className="material-icons">close</span></span>
                    }
                </div>
                <div className="ad-rental-period">
                    Rental period: <span className="number-of-days">{advertisement.periodOfTime ? advertisement.periodOfTime + " days" : "unspecified"}</span>
                </div>
                <div className="ad-rental-condition">
                    Rental conditions: {advertisement.rentalConditions}
                </div>
                <div className="ad-return-requirements">
                    Return requirements: {advertisement.returnRequirements}
                </div>

            </div>
        </div>
    )
}

export default advertisementPreview;