var ProductCategoryRow=React.createClass({
  render: function() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>   
      </tr>
    );
  }
});

var ProductRow=React.createClass({
  render: function() {
    var name=this.props.product.stocked?
    this.props.product.name:
    <span style={{color:"red"}}>
      {this.props.product.name}
    </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable=React.createClass({
  render: function() {
    var rows=[],lastCategory=null;
    this.props.products.forEach((product)=>{
      if(product.category!==lastCategory){
        rows.push(<productCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory=product.category;
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar=React.createClass({
  render: function() {
    return (
      <form>
        <input className="form-control" type="text" placeholder="Search..."/>
        <p>
          <label><input type="checkbox"/>
          {""}
          Only show products in stock
          </label>
        </p>
      </form>
    );
  }
});

var FilterableProductTable=React.createClass({
  render: function() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <SearchBar/>
        <ProductTable products={this.props.products}/>
      </div>
    );
  }
});
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
React.render(<FilterableProductTable products={PRODUCTS} />, document.body);
