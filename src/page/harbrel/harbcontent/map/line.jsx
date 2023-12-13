import HarbSector from "./sector";

export default function HarbLine({ list }) {
  return (
    <div className="harbLine">
      {list.map((ele) => {
        return <HarbSector key={ele[1]} hp={ele[0]} id={ele[1]} />;
      })}
    </div>
  );
}
