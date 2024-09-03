import _Card from '../../Card';
import { useEffect, useState } from 'react';

const Container = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // جلب البيانات من API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      {products.map((product) => {
        return <_Card key={product.id} image={product.image} description={product.description} />;
      })}
    </div>
  );
};
export default Container;
