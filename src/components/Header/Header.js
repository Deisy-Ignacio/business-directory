import tribalLogo from "assets/tribal_logo.png";
import * as SB from "components/Common/SideBar/SideBar.styled";
import { useDispatch } from "react-redux";
import { displayMenu } from "redux/actions/views/views.actions";
import * as S from "./Header.styled";

export default function Header() {
  const dispatch = useDispatch();

  /**
   * This is a function to show the menu .
   * @returns {void}
   */
  const handleMenu = () => {
    dispatch(displayMenu(true));
  };

  return (
    <S.Container>
      <SB.Logo src={tribalLogo} onClick={handleMenu} />
    </S.Container>
  );
}
