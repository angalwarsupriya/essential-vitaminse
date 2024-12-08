
import './page.css'

const FeatureItem = ({title, description, link}) => {
    return(
        <div className="featur-card-item">
            <div className='round-con'>
                <img src={link} alt={title} className='round-img'/>
            </div>
            <h5 className='feature-item-title'>{title}</h5>
            <p className='feature-item-p'>{description}</p>
        </div>
    )
}


export default FeatureItem