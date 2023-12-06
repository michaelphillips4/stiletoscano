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
  onChangeHandler  
}: Props) => {
  return (
    <>
      {labelMessageId && (
        <label htmlFor={Id} className="form-label">
          <FormattedMessage id={labelMessageId} />
        </label>
      )}
     <div className="row">
      <div className="col-11">
          <input
            type="text"
            className="form-control "
            id={Id}
            placeholder={placeHolder}
            onChange={(e) => onChangeHandler(e.target.value)}
            value={value}
           
          />
         </div>
         <div className="col mt-4">
          {value && 
          <i className="bi bi-check2"></i>}
          {!value && <span>*</span>}
          </div>
     </div>
     </>
  );
};

export default TextWithLabel;
