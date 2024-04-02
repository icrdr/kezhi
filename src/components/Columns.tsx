import React from "react";

const Columns = ({
  children,
  sizes,
}: {
  children: React.ReactNode;
  sizes: Array<number>;
}) => {
  const child_components = React.Children.toArray(children);
  // const column_count = sizes.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <div className={`grid grid-cols-${3} gap-4`}>
      {child_components.map((child, index) => {
        return (
          <div className={`col-span-${sizes[index]}`} key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default Columns;
