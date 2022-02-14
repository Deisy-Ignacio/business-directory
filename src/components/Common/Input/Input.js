import NumberFormat from "react-number-format";
import Label from "../Label/Label";
import * as S from "./Input.styled";
import { INPUT_TYPES } from "utils/data";

const Input = ({ title, type = "text", ...props }) => {
  const handleNumber = (values, source) => {
    const { event } = source;
    props.onChange(event);
  };

  const getInput = () => {
    switch (type) {
      case INPUT_TYPES.TEXT:
        return <S.Input {...props} />;
      case INPUT_TYPES.NUMBER:
        return (
          <NumberFormat
            id={props.id}
            className={props.className}
            format="(###) ### - ####"
            mask=""
            name="number"
            value={props.value}
            onValueChange={handleNumber}
            {...props}
          />
        );
      case INPUT_TYPES.DATE:
        return (
          <S.Input
            type={type}
            data-date=""
            data-date-format="MM/dd/YY"
            {...props}
          />
        );

      default:
        return <S.Input {...props} />;
    }
  };

  return (
    <S.Container>
      <Label type="inputLabel">{title}</Label>
      {getInput()}
    </S.Container>
  );
};

export default Input;
