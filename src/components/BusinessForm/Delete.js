import Button from "components/Common/Button/Button";
import Label from "components/Common/Label/Label";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./BusinessForm.styled";

const Delete = ({ id, name, handleDelete, cancel, fullWidth }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "remove",
  });

  /**
   * This is a closure to delete a item (business or business person).
   * @param {string} id set current business or business person by id
   * @returns {Function}
   */
  const handleDeleteItem = useCallback(
    (id) => () => {
      handleDelete(id);
    },
    [handleDelete]
  );

  return (
    <>
      <Label type={"subtitle"} textAlign={"center"}>
        {t("title")} {name}?
      </Label>
      <S.ContainerButtons>
        <Button variant="secondary" onClick={cancel} fullWidth={fullWidth}>
          {t("cancel")}
        </Button>
        <Button
          variant="error"
          onClick={handleDeleteItem(id)}
          fullWidth={fullWidth}
        >
          {t("remove")}
        </Button>
      </S.ContainerButtons>
    </>
  );
};

export default Delete;
