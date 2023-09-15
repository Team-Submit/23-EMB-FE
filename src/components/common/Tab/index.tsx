import { EachTab } from "./EachTab";
import * as S from "./style";

interface ListProps {
  text: string;
  link: string;
  path: string;
}
interface TabProps {
  list: ListProps[];
  selected: string;
}

/** list={text : 글씨, link:이동할 페이지 , path:경로 이름}, selected="지금 선택된 경로 문자로" */
export const Tab = ({ list, selected }: TabProps) => {
  return (
    <S.Container>
      {list.map((v) => (
        <S.TabLink to={v.link}>
          <EachTab selected={v.path === selected} value={v.text} />
        </S.TabLink>
      ))}
    </S.Container>
  );
};
