import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import Label from "components/Common/Label/Label";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOpenModal } from "redux/actions/Modal/modal.actions";
import {
  addNewBusiness,
  editCurrentBusiness,
} from "../../redux/actions/business.actions";
import * as S from "./BusinessForm.styled";

const CreateEdit = ({ cancel }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { currentBusiness } = useSelector((state) => state.business);

  const editBusiness = () => {
    dispatch(editCurrentBusiness({ ...currentBusiness, name }));
    dispatch(setOpenModal(false));
  };

  const createBusiness = () => {
    dispatch(addNewBusiness({ name }));
    dispatch(setOpenModal(false));
  };

  const onChangeInput = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    currentBusiness != null && setName(currentBusiness.name);
  }, [currentBusiness]);

  return (
    <>
      <Label type={"subtitle"} textAlign={"center"}>
        {currentBusiness ? "Edit Business" : "Create Business"}
      </Label>
      <Input title={"Business Name"} value={name} onChange={onChangeInput} />
      <S.ContainerButtons>
        <Button variant="secondary" onClick={cancel}>
          Cancel
        </Button>
        <Button
          onClick={currentBusiness ? editBusiness : createBusiness}
          disabled={name.length === 0}
        >
          {currentBusiness ? "Save" : "Create"}
        </Button>
      </S.ContainerButtons>
    </>
  );
};

export default CreateEdit;
