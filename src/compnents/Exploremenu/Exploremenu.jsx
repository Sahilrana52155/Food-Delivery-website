import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({ category, setcategory }) => {
    return (
        <div className='exploremenu' id='exploremenu'>
            <h1>Explore our menu</h1>
            <p className="exploremenutext">Choose from our expertly curated menu featuring the best dishes, crafted with fresh ingredients and bold flavors. Whether you're craving classic favorites or something new, our selection guarantees a delightful meal to satisfy every craving..</p>
            <div className="exploremenulist">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => setcategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
                            key={item.menu_name}
                            className={`exploremenutextitem ${category === item.menu_name ? 'active' : ''}`}
                        >
                            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>

                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Exploremenu
