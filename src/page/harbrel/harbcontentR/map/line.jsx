import HarbSector from "./sector";

export default function HarbLine({ list }) {
  return (
    <div className="harbLine">
      {list.map((hp, id) => {
        return <HarbSector key={id} hp={hp} id={id} />;
      })}
    </div>
  );
}
