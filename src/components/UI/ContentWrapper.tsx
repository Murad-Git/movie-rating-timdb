import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}
const ContentWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`content_wrapper px-5 xl:px-16 lg:grid lg:grid-cols-4 lg:gap-7 mb-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
