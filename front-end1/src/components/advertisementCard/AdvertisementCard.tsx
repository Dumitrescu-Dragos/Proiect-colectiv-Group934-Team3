import * as React from 'react'
import './AdvertisementCard.scss';
import { Advertisement, Tool } from '../../common/Client';

interface IProps{
    data: Advertisement
}

const advertismentCard = (props: IProps) => {
    const advertisement: Advertisement = props.data;
    const tool: Tool | undefined = advertisement.tool !== undefined? advertisement.tool : undefined;
    const placeholderImage="./../../../../../assets/images/placeholder-image.jpg";

    return (
        <div className="advertisement-card">
            <div className="card-image">
                <img src={ tool!== undefined && tool.imageUrls !== undefined && tool.imageUrls.length > 0 ? tool.imageUrls[0] : placeholderImage}/>
            </div>
            <div className="card-content">
                <h2 className="card-title">{advertisement.title}</h2>
                <div className="card-role">
                    <span className="role-category">{advertisement.category !==undefined ? advertisement.category.name : null}</span>
                    <span className="role-delimiter">-</span> 
                    <span className="role-type">{advertisement.type}</span>
                </div>
                <div className="card-description">
                    {advertisement.description !=undefined ? advertisement.description.slice(0,250) + "..." : null}
                </div>
            </div>
        </div>
    )
}

export default advertismentCard;