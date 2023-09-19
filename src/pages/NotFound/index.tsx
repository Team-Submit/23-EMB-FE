import { Button } from "../../styles/common/Button";
import { FlexContainer, Title, Description } from "./style";

export default function NotFound(){
    return(
        <FlexContainer>
            <Title>오 쉬엣 프로블람 히어 헤업 미</Title>
            <Description>
                페이지가 존재하지 않거나,
                <br/>
                접근 권한이 없을 수 있습니다
            </Description>
            <Button colorType="Point" size="M" >
                처음으로
            </Button>
        </FlexContainer>
    )
}