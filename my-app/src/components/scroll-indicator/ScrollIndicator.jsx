import { useEffect, useState } from 'react';
import './ScrollIndicator.scss';

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleScrollPercentage = () => {
    const scrollLength =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollLength / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (error) return <div>Error ! {error}</div>;

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <div className={'scroll-indicator-w'}>
      <div className={'scroll-indicator-w_top-w'}>
        <h1>Custom Scroll Indicator</h1>
        <div className={'scroll-indicator-w_top-w_tracking-w'}>
          <div
            className={
              'scroll-indicator-w_top-w_tracking-w_current-progress-bar'
            }
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={'scroll-indicator-w_data-w'}>
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.title}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
