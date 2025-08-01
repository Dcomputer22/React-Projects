import { useEffect, useState } from 'react';
import './LoadMoreData.scss';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 120) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Data loading! Please wait</div>;
  }

  return (
    <div className={'load-more-container'}>
      <div className={'product-container'}>
        {products && products.length
          ? products.map((item) => (
              <div className={'product'} key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className={'button-container'}>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached 120 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
