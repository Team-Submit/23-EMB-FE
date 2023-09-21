import { Document, Page, Text, View } from "@react-pdf/renderer"
import { PdfStyle } from "./style"

interface CerfOfCareerType{
    name: string;
    birthdate: string;
    address: string;
    firstTenure: string;
    lastTenure: string;
    occupation: string;
}

export default function CerificationOfCareerPDF({name, address, birthdate ,firstTenure, lastTenure, occupation}:CerfOfCareerType){
    const s = PdfStyle;
    const day = new Date()

    const todayYMD = `${day.getFullYear()}년 ${day.getMonth()+1}월 ${day.getDate()}일`

    return(
        <Document language="한국어" title="경력증명서">
            <Page size="A4">
                <View style={s.body}>
                    <Text style={s.title}>
                        경력 증명서
                    </Text>

                    <View style={s.outerTable}>
                        <View style={s.flexRow}>
                            <View style={[s.innerBorder, s.rowLV, {height: '45.6mm'}]}>
                                <Text>인</Text>
                                <Text>적</Text>
                                <Text>사</Text>
                                <Text>항</Text>
                            </View>
                            <View style={s.flexCol}>
                                <View style={[s.flexRow, {height: '17.6mm'}]}>
                                    <View style={[s.innerBorder,{width: '32mm'}]}>
                                        <Text>① 성   명</Text>
                                    </View>
                                    <View style={[s.innerBorder,{width: '34.63mm'}]}>
                                        <Text>{name}</Text>
                                    </View>
                                    <View style={[s.innerBorder,{width: '40mm'}]}>
                                        <Text>② 생년월일</Text>
                                    </View>
                                    <View style={[s.innerBorder,{width: '52.59mm'}]}>
                                        <Text>{birthdate}</Text>
                                    </View>
                                </View>
                                <View style={[s.flexRow, {height: '28mm'}]}>
                                    <View style={[s.innerBorder, {width: '32mm'}]}>
                                        <Text>③ 주   소</Text>
                                    </View>
                                    <View style={[s.innerBorder, {width: '127mm'}]}>
                                        <Text>{address}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={s.flexRow}>
                            <View style={[s.innerBorder, s.rowLV, {height: '65.39mm'}]}>
                                <Text>경</Text>
                                <Text>력</Text>
                                <Text>상</Text>
                                <Text>황</Text>
                            </View>
                            <View style={s.flexCol}>
                                <View style={[s.flexRow, {height: '28mm'}]}>
                                    <View style={[s.innerBorder, {width: '32mm'}]}>
                                        <Text>④ 직   종</Text>
                                    </View>
                                    <View style={[s.innerBorder, {width: '127mm'}]}>
                                        <Text>{occupation}</Text>
                                    </View>
                                </View>
                                <View style={[s.flexRow, {height: '37.32mm'}]}>
                                    <View style={[s.innerBorder, {width: '32mm'}]}>
                                        <Text>⑤ 재직기간</Text>
                                    </View>
                                    <View style={[s.innerBorder, {width: '127mm'}]}>
                                        <Text>{firstTenure} ~ {lastTenure}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={[s.flexRow, {height: '19.59mm', borderBottom: '0.5mm black solid'}]}>
                            <View style={[s.innerBorder, {width: '43.87mm'}]}>
                                <Text>⑥ 용     도</Text>
                            </View>
                            <View style={[s.innerBorder, {width: '100%'}]}>
                                <Text>제출용</Text>
                            </View>
                        </View>

                        <View style={s.tail}>
                            <Text>
                                상기와 같이 근무하였음을 확인합니다.
                            </Text>
                            <Text>
                                {todayYMD}
                            </Text>
                            <Text style={s.head}>
                                대전광역시 유성구청장
                            </Text>
                        </View>

                    </View>
                </View>
            </Page>
        </Document>
    )
}