import { useState } from 'react';
import MenuList from './MenuList';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [showCurrentChildren, setShowCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setShowCurrentChildren({
      ...showCurrentChildren,
      [getCurrentLabel]: !showCurrentChildren[getCurrentLabel],
    });
  };

  return (
    <li className={'menu-item-wrapper'}>
      <div className={'menu-item-wrapper_content'}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {showCurrentChildren[item.label] ? (
              <FaMinus size={'25px'} />
            ) : (
              <FaPlus size={'25px'} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      showCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
