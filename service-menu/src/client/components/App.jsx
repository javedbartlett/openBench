import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Menu from './Menu.jsx';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNames: null,
      menusObj: null,
      currMenu: null,
      categories: null,
      showAll: null
    }
  }

  getRestaurantData() {
    var url = window.location.href;
    var id = url.split('=')[1];

    $.ajax({
      url: `/api/menus/${id}`,
      method: 'GET',
      success: data => {
        this.setState({
          menuNames: data.menuNames,
          menusObj: data.menus,
          currMenu: data.menus[0],
          categories: data.menus[0].categories,
          showAll: false
        });
      },
      error: (err) => {
        console.log('GET error: ', err);
      }
    });
  }

  onButtonClick(menu) {
    this.setState({
      currMenu: this.state.menusObj[this.state.menuNames.indexOf(menu)],
      categories: this.state.menusObj[this.state.menuNames.indexOf(menu)].categories
    })
  }

  componentDidMount() {
    this.getRestaurantData();
  }

  render() {
    if (this.state.currMenu === null) {
      return (
        <div className="menuTitle">
          <h5>Content is loading...</h5>
          <hr />
        </div>
      )
    } else if (this.state.showAll === false) {
      return (
        <div>
          <div className="menuTitle">
            <h5>Menu</h5>
            <hr />
          </div>
          <div>
            <Buttons currMenu={this.state.currMenu} menus={this.state.menuNames} onButtonClick={this.onButtonClick.bind(this)}/>
            <hr />
          </div>
          <div>
            <Menu menu={this.state.currMenu} categories={this.state.categories}/>
          </div>
        </div>
      )
    }
  }
}

export default App;