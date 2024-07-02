import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <>
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore Menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga dolor? Ea pers
            piciatis sed consequatur magnam aperiam ipsum. Laboriosam in ducimus at repellat delectus unde. 
            At voluptatem cum eum iure?</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div key={index} className='explore-menu-list-item'>
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    </>
  )
}

export default ExploreMenu