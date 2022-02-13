import { Button } from "components/Common/Button/Button";
import { Label } from "components/Common/Label/Label";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCurrentBusiness } from "redux/actions/business.actions";
import * as S from "./BusinessForm.styled";

const Delete = ({ cancel }) => {
  const dispatch = useDispatch();
  const { currentBusiness } = useSelector((state) => state.business);

  const handleDelete = useCallback(() => {
    currentBusiness &&
      dispatch(deleteCurrentBusiness(currentBusiness.businessId));
    cancel();
  }, [dispatch, currentBusiness, cancel]);

  return (
    <>
      <Label type={"subtitle"} textAlign={"center"}>
        Are you sure to delete {currentBusiness?.name}?
      </Label>
      <S.ContainerButtons>
        <Button variant="secondary" onClick={cancel}>
          Cancel
        </Button>
        <Button variant="error" onClick={handleDelete}>
          Remove
        </Button>
      </S.ContainerButtons>
    </>
  );
};

export default Delete;
