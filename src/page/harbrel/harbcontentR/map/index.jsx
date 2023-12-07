import HarbLine from "./line";

export default function HarbMap({ setMapBox }) {
  return (
    <div className="harbMap">
      <HarbLine
        list={[
          ["3", 12],
          ["3", 1],
          ["3", 3],
        ]}
        setMapBox={setMapBox}
      />
      <HarbLine
        list={[
          ["3", 11],
          ["14", 0],
          ["3", 5],
        ]}
        setMapBox={setMapBox}
      />
      <HarbLine
        list={[
          ["3", 9],
          ["3", 7],
          ["3", 6],
        ]}
        setMapBox={setMapBox}
      />
    </div>
  );
}
