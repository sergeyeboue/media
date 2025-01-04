import classname from "classname";

function Skeleton({ times }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, index) => <div key={index} />);
  return boxes;
}

export default Skeleton;
