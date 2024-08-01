import React, { useState } from 'react';

interface TruncatedTextProps {
  description: string;
  isExpanded: boolean;
  onToggle: (event: React.MouseEvent) => void;
}

export default function TruncatedText({
  description,
  isExpanded,
  onToggle,
}: TruncatedTextProps) {
  const truncateText = (text: string, length: number = 40) => {
    return text.length > length ? `${text.substring(0, length)}` : text;
  };

  return (
    <div className='pl-3 text-sm'>
      <p>
        {isExpanded ? description : truncateText(description)}
        {description.length > length && (
          <span
            className='text-color-primary/60 cursor-pointer'
            onClick={onToggle}
          >
            {isExpanded ? ' less' : '...more'}
          </span>
        )}
      </p>
    </div>
  );
}
