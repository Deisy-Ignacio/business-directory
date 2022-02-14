import Button from "components/Common/Button/Button";
import Label from "components/Common/Label/Label";
import { useCallback } from "react";
import * as S from "./BusinessForm.styled";

const Delete = ({ id, name, handleDelete, cancel }) => {
  const handleDeleteItem = useCallback(
    (id) => () => {
      handleDelete(id);
    },
    [handleDelete]
  );

  return (
    <>
      <Label type={"subtitle"} textAlign={"center"}>
        Are you sure to delete {name}?
      </Label>
      <S.ContainerButtons>
        <Button variant="secondary" onClick={cancel}>
          Cancel
        </Button>
        <Button variant="error" onClick={handleDeleteItem(id)}>
          Remove
        </Button>
      </S.ContainerButtons>
    </>
  );
};

export default Delete;
