import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail } from "../../apis/common/detail";
import { ChevronLeft20 } from "../../assets/icons/ChevronLeft20";
import { DownLoad } from "../../assets/icons/DownLoad";
import { LastData } from "../../components/common/DetailData/Last";
import { NowData } from "../../components/common/DetailData/Now";
import { WorkData } from "../../components/common/DetailData/Work";
import FileDownloadModal from "../../components/document/FileDownloadModal";
import { Button } from "../../styles/common/Button";
import * as S from "./style";
import { DetailType } from "../../types/detail";

export const DetailPage = () => {
  const [IsDownloadModalOpen, setIsDownloadModalOpen] =
    useState<boolean>(false);
  const [detailData, setDetailData] = useState<DetailType>();
  const param = useParams();

  console.log(param.id);

  useEffect(() => {
    const data = getDetail(`${param.id}`);
    // setDetailData(data); api연동시 변경 예정
  }, []);

  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  return (
    <S.Backgound>
      <S.BackPage>
        <S.BackIcon>
          <div onClick={onClickBtn}>
            <ChevronLeft20 />
          </div>
        </S.BackIcon>
        <S.BackName>홍길동이</S.BackName>
      </S.BackPage>
      <div>
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
                department={detailData.department}
                userNumber={detailData.userNumber}
            /> */}
        <S.Line />
        {/* <NowData 
                userName={detailData.userName}
                department={detailData.department}
                userNumber={detailData.userNumber}
            /> */}
      </div>
      <Button
        size="XL"
        colorType="Point"
        onClick={() => setIsDownloadModalOpen(true)}
      >
        <DownLoad fill="white" />
        다운로드
      </Button>
      <FileDownloadModal
        IsOpen={IsDownloadModalOpen}
        setIsOpen={setIsDownloadModalOpen}
        data={detailData}
      />
    </S.Backgound>
  );
};
