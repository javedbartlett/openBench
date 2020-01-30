import React from 'react';

const Buttons = ({ currMenu, menus, onButtonClick}) => {
  return (
    <span>{menus.map((menu) =>
      <button className="menuButton" key={menus.indexOf(menu)} onClick={() =>
        onButtonClick(menu)}>Menu {menu}</button>)}
    </span>
  )
};

export default Buttons;