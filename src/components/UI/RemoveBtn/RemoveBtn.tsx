import React from 'react';

type RemoveBtnProps = {
  action: () => void;
};


const RemoveBtn: React.FC<RemoveBtnProps> = ({ action }) => {
  return (
    <button type="button" className="cart__remove-btn remove-btn btn" onClick={action}></button>
  );
};

export default RemoveBtn;