import React from 'react';
import './PaginationButton.scss';

type PaginationButtonProps = {
  content: React.ReactNode;
  handleClick: () => void;
  hidden?: boolean;
  active?: boolean;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  content,
  handleClick,
  hidden = false,
  active = false,
}) => {
  return (
    <button
      className={`pagination__button ${active ? 'active' : ''} ${hidden ? 'hidden' : ''}`}
      onClick={handleClick}
      disabled={hidden}
    >
      {content}
    </button>
  );
};

export default PaginationButton;
