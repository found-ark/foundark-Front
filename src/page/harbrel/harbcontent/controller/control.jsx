import ControllButton from "./controllButton";

export default function Control({ list }) {
  return (
    <div className="harbControl">
      {list.map((ele) => {
        return (
          <ControllButton
            key={ele[0] + ele[1]}
            value={ele[1]}
            buttonname={ele[0]}
            onClick={ele[2]}
          />
        );
      })}
    </div>
  );
}
