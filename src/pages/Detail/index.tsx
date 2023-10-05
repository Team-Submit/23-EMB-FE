import { useState } from "react";
import { ChevronLeft20 } from "../../assets/icons/ChevronLeft20";
import { DownLoad } from "../../assets/icons/DownLoad";
import { LastData } from "../../components/common/DetailData/Last";
import { NowData } from "../../components/common/DetailData/Now";
import { WorkData } from "../../components/common/DetailData/Work";
import FileDownloadModal from "../../components/document/FileDownloadModal";
import { Button } from "../../styles/common/Button";
import * as S from "./style";

export const DetailPage = () => {
    const [IsDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);

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
            <Button size="XL" colorType="Point" onClick={()=>setIsDownloadModalOpen(true)}><DownLoad fill="white" />다운로드</Button>
            <FileDownloadModal IsOpen={IsDownloadModalOpen} setIsOpen={setIsDownloadModalOpen}/>
        </S.Backgound>
    );
}