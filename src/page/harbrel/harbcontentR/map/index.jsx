import HarbLine from "./line";

export default function HarbMap() {
  return (
    <div className="harbMap">
      <HarbLine
        list={[
          ["3", 12],
          ["3", 1],
          ["3", 3],
        ]}
      />
      <HarbLine
        list={[
          ["3", 11],
          ["14", 0],
          ["3", 5],
        ]}
      />
      <HarbLine
        list={[
          ["3", 9],
          ["3", 7],
          ["3", 6],
        ]}
      />
    </div>
  );
}
