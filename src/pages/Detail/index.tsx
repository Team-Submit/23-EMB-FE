import { ChevronLeft20 } from "../../assets/icons/ChevronLeft20";
import { DownLoad } from "../../assets/icons/DownLoad";
import { LastData } from "../../components/common/DetailData/Last";
import { NowData } from "../../components/common/DetailData/Now";
import { WorkData } from "../../components/common/DetailData/Work";
import { Button } from "../../styles/common/Button";
import * as S from "./style";

export const DetailPage = () => {

    return (
        <S.Backgound>
            <S.BackPage>
                <ChevronLeft20 />
                <S.BackName >홍길동이</S.BackName>
            </S.BackPage>
            <div>
                <WorkData />
                <S.Line />
                <LastData />
                <S.Line />
                <NowData />
            </div>
            <Button size="XL" colorType="Point" ><DownLoad fill="white" />다운로드</Button>
        </S.Backgound>
    );
}