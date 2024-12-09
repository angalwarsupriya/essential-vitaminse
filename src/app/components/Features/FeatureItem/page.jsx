import './page.css'
import PropTypes from 'prop-types';

const FeatureItem = (props) => {
    const {itemTitle, itemDis, itemUrl} = props
    return(
        <div className="featur-card-item">
            <div className='round-con'>            
                <img src={itemUrl} alt={itemTitle} className='round-img' loading='lazy'/>           
            </div>
            <h5 className='feature-item-title'>{itemTitle}</h5>
            <p className='feature-item-p'>{itemDis}</p>
        </div>
    )
}

FeatureItem.propTypes = { 
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
};


export default FeatureItem