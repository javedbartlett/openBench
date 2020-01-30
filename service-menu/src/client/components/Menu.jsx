import React from 'react';

const Menu = ({ menu, categories }) => {
  const subObj = {};

  // restructures menu items by category
  for (var i = 0; i < menu.items.length; i++) {
    const category = menu.items[i].category;
    const item = menu.items[i];
    if (subObj.hasOwnProperty(category)) {
      subObj[category].push(item);
    } else {
      subObj[category] = [item];
    }
  }

  return(
    <div>
      {categories.map((cat)=>
        <div key={categories.indexOf(cat)}>
          <h4>{cat}</h4>
          <div className='list'>
            {subObj[cat].map((item) =>
              <div key={item.itemID}>
                <div className="item-name">{item.itemName}</div>
                <div className="item-price">
                  {item.price}</div>
                <div className="item-description">{item.description}</div>
              </div>
            )}
          </div>
          <hr />
        </div>
      )}
    </div>
  );

};

export default Menu;