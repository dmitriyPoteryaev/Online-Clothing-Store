import React from 'react';
import classes from './BlockForOrder.module.css';
import starForRaiting from '../../starForRaiting.png';
import trash from '../../trash.png';
import blacktrash from '../../blacktrash.png';


const BlockForOrder = (props) => {

    
    return (
        <div className={classes.blockForContent}>
        <p className={classes.raiting}>{props.value.rating}</p>
        <p className={classes.NameOfBackpack}> {props.value.NameOfBackpack}</p>
        <p className={classes.Price}>{props.value.Price_rub} 000 ₽</p>
        <img src={props.value.img_backpack}  className={classes.content_picture}  alt={'PictureOfBackpack'}/>
        <img src={starForRaiting}  className={classes.img_starForRaiting}  alt={'PictureForRaiting'}/>
        <img
         src={trash} 
          className={classes.img_trash} 
           alt={'PictureForTrash'}
            onClick={()=>props.remove(props.value)}
            onMouseOver={(event)=>(event.currentTarget.src = blacktrash)}
            onMouseOut={(event)=>(event.currentTarget.src = trash)}/>
    </div>
    );
};

export default BlockForOrder;