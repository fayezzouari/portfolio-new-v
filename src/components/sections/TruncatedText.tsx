import React, { useState } from 'react';

interface TruncatedTextProps {
  description: string;
  maxLength?: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ 
  description, 
  maxLength = 500 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If description is shorter than maxLength, return full text
  if (description.length <= maxLength) {
    return (
      <p className="relative z-10 py-3 text-sm text-skin-base">
        {description}
      </p>
    );
  }

  // Truncate and expand logic
  const truncatedText = description.slice(0, maxLength);
  const remainingText = description.slice(maxLength);

  return (
    <div className="relative z-10 py-3 text-sm text-skin-base">
      {isExpanded ? (
        <>
          {description}
          <button 
            onClick={() => setIsExpanded(false)}
            className="ml-2 hover:underline"
          >
            See Less
          </button>
        </>
      ) : (
        <>
          {truncatedText}...
          <button 
            onClick={() => setIsExpanded(true)}
            className="ml-2 hover:underline"
          >
            See More
          </button>
        </>
      )}
    </div>
  );
};

export default TruncatedText;