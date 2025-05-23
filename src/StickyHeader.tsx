import React, { ReactNode } from 'react';

type StickyHeaderProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const StickyHeader: React.FC<StickyHeaderProps> = ({ children, className, style }) => {
  return (
    <div
      className={className}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default StickyHeader;
