import { useState } from "react";
import { Modal } from "../../common/Modal";
import { Button } from "../../../styles/common/Button";
import { ButtonHorizonal, Text24 } from "./style";

export default function FileDownloadModal(){
    const [IsOpen, setIsOpen] = useState<boolean>(true);

    return(
        <Modal isOpen={IsOpen} title="다운로드">
            <Text24>
                박씨(2077/09/23)
            </Text24>
            <ButtonHorizonal>
                <Button size='M' colorType="Point">다운로드</Button>
                <Button size='M' colorType="Gray" onClick={()=> setIsOpen(false)}>닫기</Button>
            </ButtonHorizonal>
        </Modal>
    )
}