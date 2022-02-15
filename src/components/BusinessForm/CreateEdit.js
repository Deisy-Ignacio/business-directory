import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import Label from "components/Common/Label/Label";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setOpenModal } from "redux/actions/modal/modal.actions";
import {
  addNewBusiness,
  editCurrentBusiness,
} from "../../redux/actions/business.actions";
import * as S from "./BusinessForm.styled";

const CreateEdit = ({ cancel, fullWidth }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { currentBusiness } = useSelector((state) => state.business);
  const { t } = useTranslation("translation", { keyPrefix: "business.form" });

  /**
   * This is a function to edit the currentBusiness
   *
   * @returns {Function}
   */
  const editBusiness = () => {
    dispatch(editCurrentBusiness({ ...currentBusiness, name }));
    dispatch(setOpenModal(false));
  };

  /**
   * This is a function to add the currentBusiness and open the modal
   *
   * @returns {Function}
   */
  const createBusiness = () => {
    dispatch(addNewBusiness({ name }));
    dispatch(setOpenModal(false));
  };

  /**
   * This is a function to set the name value
   *
   * @param {event.target} target to get the value
   * @returns {void}
   */
  const onChangeInput = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    currentBusiness != null && setName(currentBusiness.name);
  }, [currentBusiness]);

  return (
    <>
      <Label type={"subtitle"} textAlign={"center"}>
        {currentBusiness ? `${t("titleEdit")}` : `${t("title")}`}
      </Label>
      <Input title={t("label")} value={name} onChange={onChangeInput} />
      <S.ContainerButtons>
        <Button fullWidth={fullWidth} variant="secondary" onClick={cancel}>
          {t("cancel")}
        </Button>
        <Button
          fullWidth={fullWidth}
          onClick={currentBusiness ? editBusiness : createBusiness}
          disabled={name.length === 0}
        >
          {currentBusiness ? `${t("save")}` : `${t("title")}`}
        </Button>
      </S.ContainerButtons>
    </>
  );
};

export default CreateEdit;
