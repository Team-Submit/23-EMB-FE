import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail } from "../../apis/common/detail";
import { ChevronLeft20 } from "../../assets/icons/ChevronLeft20";
import { DownLoad } from "../../assets/icons/DownLoad";
import { LastData } from "../../components/common/DetailData/Last";
import { NowData } from "../../components/common/DetailData/Now";
import { WorkData } from "../../components/common/DetailData/Work";
import { Button } from "../../styles/common/Button";
import * as S from "./style";

export const DetailPage = () => {
import FileDownloadModal from "../../components/document/FileDownloadModal";
import { Button } from "../../styles/common/Button";
import * as S from "./style";

interface DetailType {
    name: string,
    birthdate: string,
    address: string,
    firstTenure: string,
    lastTenure: string,
    occupation: string,
    department: string,
    userName: string,
    userNumber: string
}

export const DetailPage = () => {
    const [IsDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
    const [detailData, setDetailData] = useState<DetailType>();
    const param = useParams();

    console.log(param.id);

    useEffect(() => {
        const data = getDetail(`${param.id}`);
        // setDetailData(data); api연동시 변경 예정
    }, []);
>>>>>>> Stashed changes

    return (
        <S.Backgound>
            <S.BackPage>
                <ChevronLeft20 />
                <S.BackName >홍길동이</S.BackName>
            </S.BackPage>
            <div>
<<<<<<< Updated upstream
                <WorkData />
                <S.Line />
                <LastData />
                <S.Line />
                <NowData />
            </div>
            <Button size="XL" colorType="Point" ><DownLoad fill="white" />다운로드</Button>
                {/* <WorkData
                    name={detailData.name}
                    birthdate={detailData.birthdate}
                    firstTenure={detailData.firstTenure}
                    lastTenure={detailData.lastTenure}
                    occupation={detailData.occupation}
                /> */}
                <S.Line />
                {/* <LastData 
                    userName={detailData.userName}
                    userNumber={detailData.userNumber}
                /> */}
                    department={detailData.department}
                <S.Line />
                    userName={detailData.userName}
                {/* <NowData 
                    userNumber={detailData.userNumber}
                /> */}
            <Button size="XL" colorType="Point" onClick={() => setIsDownloadModalOpen(true)}><DownLoad fill="white" />다운로드</Button>
            </div>
                    department={detailData.department}
            <FileDownloadModal IsOpen={IsDownloadModalOpen} setIsOpen={setIsDownloadModalOpen} />
        </S.Backgound>
    );
}