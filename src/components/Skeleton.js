import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassesNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  ); // pour le div extérieur qui contient l'effet scintillant
  const innerClassesNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  ); // pour le div intérieur qui crée l'effet scintillant

  const boxes = Array(times)
    .fill(0)
    .map((_, index) => {
      return (
        <div key={index} className={outerClassesNames}>
          <div className={innerClassesNames} />
        </div>
      );
    });
  return boxes;
}

export default Skeleton;
