import * as S from "./SideBar.styled";
import tribalLogo from "assets/tribal_logo.png";
import { ReactComponent as Arrow } from "assets/svgs/arrow-down.svg";
import { ReactComponent as CloseIcon } from "assets/svgs/close-icon.svg";

import { MENU, VIEWS } from "utils/data";
import { useDispatch, useSelector } from "react-redux";
import { displayMenu, setMainView } from "redux/actions/views/views.actions";
import { resetStateBusinessPerson } from "redux/actions/businessPerson.actions";
import { useTranslation } from "react-i18next";

const FOOTER = ["Legal", "FAQ", "Support"];

const SideBar = ({ name = "DI" }) => {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.views);
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "menu",
  });

  /**
   * This is a function to set the main view, reset the business person and close the menu .
   *
   * @param {string} view name view
   * @returns {void}
   */
  const handleChangeView = (view) => () => {
    dispatch(setMainView(view));
    dispatch(resetStateBusinessPerson());
    showMenu && dispatch(displayMenu(false));
  };

  /**
   * This is a function to set the home view, reset the business person and close the menu .
   *
   * @returns {void}
   */
  const handleHome = () => {
    handleChangeView(VIEWS.HOME)();
  };

  /**
   * This is a function to close the menu .
   * @returns {void}
   */
  const handleCloseMenu = () => {
    dispatch(displayMenu(false));
  };

  /**
   * This is a function to change the language .
   * @returns {void}
   */
  const handleChangeLanguage = ({ target }) => {
    i18n.changeLanguage(target.value);
  };

  return (
    <S.Container showMenu={showMenu}>
      <S.Header>
        <S.Logo src={tribalLogo} onClick={handleHome} />
        {!showMenu ? (
          <>
            <S.UserName>{name}</S.UserName>
            <Arrow />
          </>
        ) : (
          <CloseIcon onClick={handleCloseMenu} />
        )}
      </S.Header>
      <S.MenuList>
        {MENU.map((item, index) => (
          <S.MenuItem
            key={`menu-item_${index}`}
            onClick={handleChangeView(VIEWS.BUSINNES)}
          >
            {item.icon}
            <S.MenuName>{t(item.title)}</S.MenuName>
          </S.MenuItem>
        ))}
      </S.MenuList>
      <S.Select value={i18n.language} onChange={handleChangeLanguage}>
        <option value={"en"}>🇺🇸</option>
        <option value={"es"}>🇲🇽</option>
      </S.Select>
      <S.Footer>
        {FOOTER.map((item, index) => (
          <S.Item key={`footer-item_${index}`}> {item}</S.Item>
        ))}
      </S.Footer>
    </S.Container>
  );
};

export default SideBar;
