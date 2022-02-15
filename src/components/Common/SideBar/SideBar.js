import * as S from "./SideBar.styled";
import tribalLogo from "assets/tribal_logo.png";
import { ReactComponent as Arrow } from "assets/svgs/arrow-down.svg";
import { ReactComponent as CloseIcon } from "assets/svgs/close-icon.svg";

import { MENU, VIEWS } from "utils/data";
import { useDispatch, useSelector } from "react-redux";
import { displayMenu, setMainView } from "redux/actions/views/views.actions";
import { resetStateBusinessPerson } from "redux/actions/businessPerson.actions";
import { useCallback } from "react";

const FOOTER = ["Legal", "FAQ", "Support"];

const SideBar = ({ name = "DI" }) => {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.views);

  const handleChangeView = (view) => () => {
    dispatch(setMainView(view));
    dispatch(resetStateBusinessPerson());
    showMenu && dispatch(displayMenu(false));
  };

  const handleHome = () => {
    dispatch(setMainView(VIEWS.HOME));
    dispatch(resetStateBusinessPerson());
    showMenu && dispatch(displayMenu(false));
  };

  const handleCloseMenu = useCallback(() => {
    dispatch(displayMenu(false));
  }, [dispatch]);

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
            <S.MenuName>{item.title}</S.MenuName>
          </S.MenuItem>
        ))}
      </S.MenuList>
      <S.Footer>
        {FOOTER.map((item, index) => (
          <S.Item key={`footer-item_${index}`}> {item}</S.Item>
        ))}
      </S.Footer>
    </S.Container>
  );
};

export default SideBar;
