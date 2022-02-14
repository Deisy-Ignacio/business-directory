import * as S from "./SideBar.styled";
import tribalLogo from "assets/tribal_logo.png";
import { ReactComponent as Arrow } from "assets/svgs/arrow-down.svg";
import { MENU } from "utils/data";

const FOOTER = ["Legal", "FAQ", "Support"];

const SideBar = ({ name }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src={tribalLogo} />
        <S.UserName>{name}</S.UserName>
        <Arrow />
      </S.Header>
      <S.MenuList>
        {MENU.map((item, index) => (
          <S.MenuItem key={`menu-item_${index}`}>
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
