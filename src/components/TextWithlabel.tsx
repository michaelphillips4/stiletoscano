import { FormattedMessage } from "react-intl";

interface Props {
  Id: string;
  labelMessageId: string;
  placeHolder: string;
  value: string;
  onChangeHandler: any;
}

const TextWithLabel = ({
  Id,
  labelMessageId,
  placeHolder,
  value,
  onChangeHandler,
}: Props) => {

  return (
    <>
      {labelMessageId && (
        <label htmlFor={Id} className="form-label">
          <FormattedMessage id={labelMessageId} />
        </label>
      )}
      <input
        type="text"
        className="form-control my-2"
        id={Id}
        placeholder={placeHolder}
        onChange={(e) => onChangeHandler(e.target.value)}
        value={value}
      />
    </>
  );
};

export default TextWithLabel;
