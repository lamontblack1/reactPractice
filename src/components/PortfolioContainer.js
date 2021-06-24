import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const pages = {
  Home: Home,
  About: About,
  Blog: Blog,
  Contact: Contact,
};
class PortfolioContainer extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const currentComponent = this.state.currentPage;
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {React.createElement(pages[currentComponent], null)}
      </div>
    );
  }
}

export default PortfolioContainer;
