/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "components/Common/Input/Input";
import Label from "components/Common/Label/Label";
import { INPUT_TYPES } from "utils/data";
import Button from "components/Common/Button/Button";
import * as S from "../BusinessForm/BusinessForm.styled";
import {
  addNewPerson,
  editCurrentBusinessPerson,
  setCurrentBusinessPerson,
} from "redux/actions/businessPerson.actions";
import { setOpenModal } from "redux/actions/modal/modal.actions";
import { useTranslation } from "react-i18next";

const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CreateEditTeam = ({ businessId, cancel, fullWidth }) => {
  const dispatch = useDispatch();
  const { currentBusinessPerson } = useSelector(
    (state) => state.businessPerson
  );
  const { t } = useTranslation("translation", {
    keyPrefix: "businessPerson.form",
  });

  const [person, setPerson] = useState([
    { title: t("name"), value: "" },
    { title: t("role"), value: "" },
    {
      title: t("email"),
      value: "",
      pattern: REGEX_EMAIL,
    },
    {
      title: t("phone"),
      value: "",
      type: INPUT_TYPES.NUMBER,
      className: "input",
    },
    { title: t("joinDate"), value: "", type: INPUT_TYPES.DATE },
  ]);

  /**
   * This is a function to change the person values.
   *
   * @param {Event.target} target to get the value and id
   * @returns {void}
   */
  const onChangeInput = ({ target }) => {
    const { value, id } = target;
    let copyPerson = [...person];
    copyPerson[id].value = value;
    setPerson(copyPerson);
  };

  /**
   * This is a function to clear the object person.
   *
   * @returns {Person}
   */
  const getClearPerson = () => {
    const [name, role, email, phone, join_date] = person;
    const newPerson = {
      name: name.value,
      role: role.value,
      phone: phone.value,
      email: email.value,
      join_date: join_date.value,
    };
    if (currentBusinessPerson)
      newPerson.personId = currentBusinessPerson.personId;
    return newPerson;
  };

  /**
   * This is a function to validate all the inputs.
   *
   * @returns {boolean}
   */
  const isValid = () => {
    const newPerson = getClearPerson();

    const areEmpty = !Object.values(newPerson)?.every(
      (value = "") => value.length > 0
    );
    if (areEmpty) return false;

    const isValidEmail = newPerson.email.match(person[2].pattern);
    if (!isValidEmail) return false;

    const isValidPhone = newPerson.phone.length === 16;
    if (!isValidPhone) return false;

    return true;
  };

  /**
   * This is a function to create a new Person
   *
   * @returns {void}
   */
  const createPerson = () => {
    const newPerson = getClearPerson();
    dispatch(addNewPerson(businessId, newPerson));
    dispatch(setOpenModal(false));
  };

  /**
   * This is a function to edit a Person
   *
   * @returns {void}
   */
  const editPerson = () => {
    dispatch(setCurrentBusinessPerson(businessId));
    const newPerson = getClearPerson();
    dispatch(editCurrentBusinessPerson(businessId, newPerson));
    dispatch(setOpenModal(false));
  };

  useEffect(() => {
    if (currentBusinessPerson != null) {
      let copyPerson = [...person];
      copyPerson[0].value = currentBusinessPerson.name;
      copyPerson[1].value = currentBusinessPerson.role;
      copyPerson[2].value = currentBusinessPerson.email;
      copyPerson[3].value = currentBusinessPerson.phone;
      copyPerson[4].value = currentBusinessPerson.join_date;
      setPerson(copyPerson);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBusinessPerson]);

  return (
    <>
      <Label type={"subtitle"} textAlign={"center"}>
        {currentBusinessPerson ? `${t("titleEdit")}` : `${t("title")}`}
      </Label>
      {person.map((item, index) => (
        <Input
          key={`input_${index}`}
          id={index}
          className={item.className}
          type={item.type}
          title={item.title}
          value={item.value}
          onChange={onChangeInput}
          placeholder={item.placeholder}
        />
      ))}
      <S.ContainerButtons>
        <Button fullWidth={fullWidth} variant="secondary" onClick={cancel}>
          {t("cancel")}
        </Button>
        <Button
          fullWidth={fullWidth}
          onClick={currentBusinessPerson ? editPerson : createPerson}
          disabled={!isValid()}
        >
          {currentBusinessPerson ? `${t("save")}` : `${t("create")}`}
        </Button>
      </S.ContainerButtons>
    </>
  );
};
