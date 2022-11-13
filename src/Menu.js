import React from "react";
import video from './Videos/Fruit Salad - 1019.mp4'
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price, vid } = item;
        return (
          <article key={id} className="menu-item">
            {vid ? <video src={video} width="750" height="500" controls className="video"></video> : <img src={img} alt={title} className="photo" />}
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
