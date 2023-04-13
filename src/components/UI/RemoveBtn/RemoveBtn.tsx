import React from 'react';
import cl from './RemoveBtn.module.scss'

type RemoveBtnProps = {
  action: () => void;
  cssClass?: string
};


const RemoveBtn: React.FC<RemoveBtnProps> = ({ action, cssClass }) => {
  return (
    <button type="button" className={[cl.removeBtn, cssClass, 'btn'].join(' ')} onClick={action} data-testid="delete-btn"></button>
  );
};

export default RemoveBtn;