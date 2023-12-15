import React, { Dispatch, useEffect, useState } from "react";
import { Modal } from "../../common/Modal";
import { Button } from "../../../styles/common/Button";
import { ButtonHorizonal, RadioContainer, Text24 } from "./style";
import Radio from "../../common/Radio";
import { usePDF } from "@react-pdf/renderer";
import CerificationOfCareerPDF from "../CerificationOfCareerPDF";
import { DetailType } from "../../../types/detail";

interface FileDownloadModalType {
  IsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  data: DetailType;
}

export default function FileDownloadModal({
  IsOpen,
  setIsOpen,
  data,
}: FileDownloadModalType) {
  const [RadioSelect, setRadioSelect] = useState<string>(
    "CerificationOfCareer"
  );
  const [instance] = usePDF({
    document: <CerificationOfCareerPDF {...data} />,
  });

  function DownloadHandler() {
    const aElement = document.createElement("a");
    aElement.href = instance.url as string;
    aElement.download = `경력증명서_${data.name}`;
    aElement.click();
  }
  
  return (
    <Modal isOpen={IsOpen} title="다운로드">
      <Text24>{data.name}({data.birthdate.replaceAll('-','.')}.)</Text24>
      <RadioContainer>
        <Radio
          text="경력증명서"
          selected={RadioSelect === "CerificationOfCareer"}
          onClick={() => setRadioSelect("CerificationOfCareer")}
        />
      </RadioContainer>
      <ButtonHorizonal>
        <Button
          size="M"
          $colortype="Point"
          disabled={instance.loading}
          onClick={DownloadHandler}
        >
          {instance.loading ? "불러오는 중" : "다운로드"}
        </Button>
        <Button size="M" $colortype="Gray" onClick={() => setIsOpen(false)}>
          닫기
        </Button>
      </ButtonHorizonal>
    </Modal>
  );
}
