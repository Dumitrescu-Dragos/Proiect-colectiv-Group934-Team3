import * as React from 'react'
import './AdvertisementPreview.scss';
import { Advertisement, Tool, getAdsUrl } from '../../common/Client';
import RequestService from '../../common/RequestService';

interface IProps{
    data: Advertisement,
    updateStatusClick: () => void
}

const advertisementPreview = (props: IProps) => {
    const advertisement: Advertisement = props.data;
    const tool: Tool | undefined = advertisement.tool !== undefined? advertisement.tool : undefined;
    const placeholderImage="./../../../../../assets/images/placeholder-image.jpg";
    console.log('ADD', advertisement);
    return (
        <div className="advertisement-preview">
            <div className="ad-image">
                <img src={ tool!== undefined && tool.images !== undefined && tool.images.length > 0 ? tool.images[0].imageUrl : placeholderImage}/>
            </div>
            <div className="ad-content">
                <h2 className="ad-title">{advertisement.title}</h2>
                <div className="ad-status" onClick={props.updateStatusClick}>
                    {tool !== undefined && tool.isAvailable ?
                        <div className="available">Available <span className="material-icons">check</span></div> :
                        <span className="unavailable">Unavailable<span className="material-icons">close</span></span>
                    }
                </div>
                <h3 className="ad-owner">Owner info: {advertisement.owner !== undefined ? advertisement.owner.firstName + ' ' + advertisement.owner.lastName : ''}</h3>
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
                <div className="ad-rental-condition">
                    Rental conditions: {advertisement.rentalConditions}
                </div>
                <div className="ad-return-requirements">
                    Return requirements: {advertisement.returnRequirements}
                </div>
                <div className="phone-number">
                    Phone-number: {advertisement.owner !== undefined ? advertisement.owner.phoneNumber : "-" }
                </div>
                <div className="ad-rental-period">
                    Rental period: <span className="number-of-days">{advertisement.periodOfTime ? advertisement.periodOfTime + " days" : "unspecified"}</span>
                </div>
            </div>
        </div>
    )
}

export default advertisementPreview;