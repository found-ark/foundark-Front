import SmallCard from "./smallCard";

export default function BigCard({ name }) {
  return (
    <div>
      <div>
        <div>
          <SmallCard name={name} />
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
