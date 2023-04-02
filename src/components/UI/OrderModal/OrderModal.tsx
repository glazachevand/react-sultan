import React from 'react';
import orderimg from './ordermodal.webp'

interface OrderModalProps {
  children?: any;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal: React.FC<OrderModalProps> = ({ children, visible, setVisible }) => {

  return (
    <div className={visible ? `order-modal _open` : `order-modal`} onClick={() => setVisible(false)}>
      <div className='order-modal__content' onClick={(e) => e.stopPropagation()}>
        <img src={orderimg} alt="" />
        {children}
      </div>
    </div>
  );
};

export default OrderModal;