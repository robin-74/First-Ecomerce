import { useSelector } from "react-redux";
import CardP from '../components/CardP'
import '../styling/ProductList.css'
 
// ProductList.js
function ProductList() {
  const dataProduct = useSelector((state) => state.Products.products);
  const { cathegory, price , Search } = useSelector((state) => state.Products);

  const filteredProducts = dataProduct.filter((product) => {
    const categoryFilter = cathegory === '' || product.cathegory === cathegory;
    const priceFilter = price === null || (product.price && product.price <= price);
    const searchFilter = Search === '' || product.name.toLowerCase().includes(Search.toLowerCase());

    return categoryFilter && priceFilter && searchFilter;
  });

  const renderProduct = filteredProducts.map((product) => (
    <div key={product.id} className='product-frame1'>
     <CardP product={product}  />
    </div>
  ));

  return (
    <div>
      <div className='frame1'>{renderProduct}</div>
    </div>
  );
}
export default ProductList