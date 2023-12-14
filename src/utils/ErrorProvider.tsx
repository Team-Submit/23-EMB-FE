import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Modal } from "../components/common/Modal";
import { ButtonHorizonal } from "../components/document/FileDownloadModal/style";
import { Button } from "../styles/common/Button";

const ErrorContext = createContext({} as ContextPropsType);

interface ContextPropsType{
    state: string;
    set: Dispatch<SetStateAction<string>>
}

interface ErrorProviderType{
    children: React.ReactNode
};

export function ErrorProvider({children}:ErrorProviderType){
    const [message, setMessage] = useState<string>('');
    const ProviderValue = {
        state: message,
        set: setMessage
    };

    return(
        <ErrorContext.Provider value={ProviderValue}>
            {message!=='' &&
                <Modal isOpen title="오류" lowImportance>
                    {message}
                    <ButtonHorizonal>
                        <Button size="M" colorType="Gray" onClick={()=>setMessage('')}>닫기</Button>
                    </ButtonHorizonal>
                </Modal>
            }
            {children}
        </ErrorContext.Provider>
    );
};

export function useError(){
    const provider = useContext(ErrorContext);
    if(!provider){
        console.error('ErrorProvider를 찾을 수 없음')
    }
    return provider
}