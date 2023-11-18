import '../style/ItemLoading.css';

const ItemLoading = () => {
    return (
        <li className='item-loading'>
            <div className='item-loading__btn item-loading__animation'></div>
            <div className='item-loading__container-text'>
                <div className="item-loading__text item-loading__animation"></div>
                <div className="item-loading__text item-loading__animation"></div>
            </div>
            <div className='item-loading__btn item-loading__btn--delete item-loading__animation'></div>
        </li>
    )
}

export { ItemLoading };