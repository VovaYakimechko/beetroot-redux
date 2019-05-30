import React from "react";
import "./ProductList.css"
import { connect } from "react-redux";
import {
  fetchProducts,
  isLoadingSelector,
  totalPagesSelector
} from "../../ducks/products";
import { Link } from "react-router-dom";

import qs from "query-string";

class ProductsList extends React.Component {
  componentDidMount() {
    const page = this.getPageNumber(this.props);
    this.props.fetchProducts(page);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevPage = this.getPageNumber(prevProps);
    const page = this.getPageNumber(this.props);
    if (page !== prevPage) {
      this.props.fetchProducts(page);
    }
  }

  getPageNumber = props => Number(qs.parse(props.location.search).page || 1);

  render() {
    let pages = new Array(this.props.totalPages)
      .fill(null)
      .map((_v, i) => i + 1);
    if (this.props.isLoading) return <div>Loading...</div>;
    return (
      <div className="ProductList">
          <div>
        <Link className="createNewForm" to={`/products/new`}>
          Add new
        </Link>
          </div>
        {this.props.list.map(el => (
          <div className="ProductListItem" key={el.id}>
              <div> <img src={el.image} alt={el.name} /></div>
              <div className="ProductListName">  <Link to={`/products/${el.id}`}>{el.name}  </Link></div>
              <Link to={`/products/${el.id}/edit`}><div className="ProductListEdit">   Edit</div></Link>
          </div>
        ))}
        <div className="ProductListPages">
          {pages.map(p => (
            <Link key={p} to={`/products?page=${p}`}>
              {p}{"        "}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    list: state.products.list,
    isLoading: isLoadingSelector(state),
    totalPages: totalPagesSelector(state)
  }),
  {
    fetchProducts
  }
)(ProductsList);
