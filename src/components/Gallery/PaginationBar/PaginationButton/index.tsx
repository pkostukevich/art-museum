import React from 'react';

import { Button } from './styled';

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
    <Button
      onClick={handleClick}
      hidden={hidden}
      active={active}
      disabled={hidden}
    >
      {content}
    </Button>
  );
};

export default PaginationButton;
