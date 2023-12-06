export default function Control({ list }) {
  return (
    <div className="harbControl">
      {list.map((ele) => {
        return (
          <div key={ele[0] + ele[1]} className={"harb_button " + ele[0]}>
            {ele[1]}
          </div>
        );
      })}
    </div>
  );
}
