import { FormattedMessage } from "react-intl";

interface ListWithLabelProps {
  selectId: string;
  labelMessageId: string;
  options: string[];
  value: string;  
  onChangeHandler:any;  
}

const ListWithLabel = ({
  selectId,
  labelMessageId,
  options,
  value,
  onChangeHandler
}: ListWithLabelProps) => {
 
  return (
    <>
      {labelMessageId && (
        <label htmlFor={selectId} className="form-label">
          <FormattedMessage id={labelMessageId} />
        </label>
      )}
       <div className="row">
      <div className="col-10">
 <select
        id={selectId}
        className="form-select"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={value}
      >
        {options &&
          options.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
      </select>
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

export default ListWithLabel;
