
import './page.css'

const FeatureItem = ({itemTitle, itemDis, itemUrl}) => {
    return(
        <div className="featur-card-item">
            <div className='round-con'>
                <img src={itemUrl} alt={itemTitle} className='round-img'/>
            </div>
            <h5 className='feature-item-title'>{itemTitle}</h5>
            <p className='feature-item-p'>{itemDis}</p>
        </div>
    )
}


export default FeatureItem