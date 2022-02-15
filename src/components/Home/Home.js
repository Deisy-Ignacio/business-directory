import TribalLogo from "assets/tribal_logo3x.png";
import * as S from "./Home.styled";

export default function Home() {
  return (
    <S.Container>
      <S.Logo src={TribalLogo} />
    </S.Container>
  );
}
