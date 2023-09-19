import { Home20 } from "../../assets/icons/Home20";
import { Button } from "../../styles/common/Button";
import { color } from "../../styles/theme";
import { FlexContainer, Title, Description } from "./style";

export default function NotFound(){
    return(
        <FlexContainer>
            <Title>문제가 발생했습니다</Title>
            <Description>
                페이지가 존재하지 않거나,
                <br/>
                접근 권한이 없을 수 있습니다
            </Description>
            <Button colorType="Point" size="M" >
                <Home20 fill={color.White}/>
                처음으로
            </Button>
        </FlexContainer>
    )
}