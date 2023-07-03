import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItemDetails from "../components/ProductItemDetails";


const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();


  useEffect(() => {
    const getProduct = async () => {
      const result = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const data = await result.json();

      setProduct(data);
    };
    getProduct();
  }, []);

  return (
    <div className=" border border-gray-300 shadow-sm rounded-xl p-4">

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <ProductItemDetails key={product.id} product={product} />

        </div>

    </div>
  );
};

export default ProductDetails;