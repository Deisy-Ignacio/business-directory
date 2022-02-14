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
} from "redux/actions/businessPerson.actions";
import { setOpenModal } from "redux/actions/Modal/modal.actions";

export const CreateEditTeam = ({ businessId, cancel }) => {
  const dispatch = useDispatch();
  const { currentBusinessPerson } = useSelector(
    (state) => state.businessPerson
  );
  const [person, setPerson] = useState([
    { title: "Name", value: "" },
    { title: "Role", value: "" },
    {
      title: "Email",
      value: "",
      pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
    },
    {
      title: "Phone",
      value: "",
      type: INPUT_TYPES.NUMBER,
      className: "input",
    },
    { title: "Join Date", value: "", type: INPUT_TYPES.DATE },
  ]);

  const onChangeInput =
    () =>
    ({ target }) => {
      const { value, id } = target;
      let copyPerson = [...person];
      copyPerson[id].value = value;
      setPerson(copyPerson);
    };

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

  const isValid = () => {
    const newPerson = getClearPerson();

    const areEmpty = !Object.values(newPerson).every(
      (value) => value.length > 0
    );
    if (areEmpty) return false;

    const isValidEmail = newPerson.email.match(person[2].pattern);
    if (!isValidEmail) return false;

    const isValidPhone = newPerson.phone.length === 16;
    if (!isValidPhone) return false;

    return true;
  };

  const createPerson = () => {
    const newPerson = getClearPerson();
    dispatch(addNewPerson(businessId, newPerson));
    dispatch(setOpenModal(false));
  };

  const editPerson = () => {
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
        {currentBusinessPerson ? "Edit Person" : "Create Person"}
      </Label>
      {person.map((item, index) => (
        <Input
          key={`input_${index}`}
          id={index}
          className={item.className}
          type={item.type}
          title={item.title}
          value={item.value}
          onChange={onChangeInput(index)}
          placeholder={item.placeholder}
        />
      ))}
      <S.ContainerButtons>
        <Button variant="secondary" onClick={cancel}>
          Cancel
        </Button>
        <Button
          onClick={currentBusinessPerson ? editPerson : createPerson}
          disabled={!isValid()}
        >
          {currentBusinessPerson ? "Save" : "Create"}
        </Button>
      </S.ContainerButtons>
    </>
  );
};
