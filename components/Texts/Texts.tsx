import ScrollFillText from "../../lib/ScrollFillText/ScrollFillText";

interface TextsPropsType {
  textData: string[];
}

const Texts = ({ textData }: TextsPropsType) => {
  return (
    <>
      {textData.map((text, index) => (
        <div key={index} data-index={index}>
          <ScrollFillText content={text} />
        </div>
      ))}
    </>
  );
};

export default Texts;
