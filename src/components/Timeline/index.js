import React from 'react';

function Timeline({ children }) {
  return (
    <div>
      {React.Children.map(children, (timelineItem, index) =>
        React.cloneElement(timelineItem, {
          number: index + 1,
          isLast: index === children.length - 1,
          position: index % 2 === 0 ? 'left' : 'right',
        }),
      )}
    </div>
  );
}

export default Timeline;
