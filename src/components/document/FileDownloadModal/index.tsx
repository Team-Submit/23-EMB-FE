import React, { Dispatch, useState } from "react";
import { Modal } from "../../common/Modal";
import { Button } from "../../../styles/common/Button";
import { ButtonHorizonal, RadioContainer, Text24 } from "./style";
import Radio from "../../common/Radio";
import { usePDF } from "@react-pdf/renderer";
import CerificationOfCareerPDF from "../CerificationOfCareerPDF.tsx";

export default function FileDownloadModal({IsOpen, setIsOpen}:{IsOpen:boolean, setIsOpen: Dispatch<React.SetStateAction<boolean>>}){
    const [RadioSelect, setRadioSelect] = useState<string>('CerificationOfCareer');
    const [instance] = usePDF({
        document: <CerificationOfCareerPDF name="성명박" address="여기" birthdate="어제" firstTenure="내일" lastTenure="내일모래" occupation="지구정복"/>,
    });

    function DownloadHandler(){
        console.log(instance)

        const aElement = document.createElement('a');
        aElement.href = instance.url as string;
        aElement.download = '경력증명서_성명박';
        aElement.click()
    }

    return(
        <Modal isOpen={IsOpen} title="다운로드">
            <Text24>
                박씨(2077/09/23)
            </Text24>
            <RadioContainer>
                <Radio text="경력증명서" selected={RadioSelect === 'CerificationOfCareer'} onClick={()=>setRadioSelect('CerificationOfCareer')}/>
                <Radio text="애플캣" selected={RadioSelect === 'applecat'} onClick={()=>setRadioSelect('applecat')}/>
                <Radio text="테스트" selected={RadioSelect === 'testing'} onClick={()=>setRadioSelect('testing')}/>
            </RadioContainer>
            <ButtonHorizonal>
                <Button size='M' colorType="Point" onClick={DownloadHandler}>다운로드</Button>
                <Button size='M' colorType="Gray" onClick={()=> setIsOpen(false)}>닫기</Button>
            </ButtonHorizonal>
        </Modal>
    )
}