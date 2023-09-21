import { Document, Page, Text, View } from "@react-pdf/renderer"
import { PdfStyle } from "./style"

export default function CerificationOfCareerPDF(){
    const s = PdfStyle;

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
                                        <Text>김밥버거</Text>
                                    </View>
                                    <View style={[s.innerBorder,{width: '40mm'}]}>
                                        <Text>② 생년월일</Text>
                                    </View>
                                    <View style={[s.innerBorder,{width: '52.59mm'}]}>
                                        <Text>3080.09.27.</Text>
                                    </View>
                                </View>
                                <View style={[s.flexRow, {height: '28mm'}]}>
                                    <View style={[s.innerBorder, {width: '32mm'}]}>
                                        <Text>③ 주   소</Text>
                                    </View>
                                    <View style={[s.innerBorder, {width: '127mm'}]}>
                                        <Text>대전광역시 동구 중앙로 215 (대전역)</Text>
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
                                        <Text>콤퓨타 프로그램</Text>
                                    </View>
                                </View>
                                <View style={[s.flexRow, {height: '37.32mm'}]}>
                                    <View style={[s.innerBorder, {width: '32mm'}]}>
                                        <Text>⑤ 재직기간</Text>
                                    </View>
                                    <View style={[s.innerBorder, {width: '127mm'}]}>
                                        <Text>2023.09.12 ~ 3019.02.82</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={[s.flexRow, {height: '19.59mm', borderBottom: '0.5mm black solid'}]}>
                            <View style={[s.innerBorder, {width: '43.87mm'}]}>
                                <Text>⑥ 용     도</Text>
                            </View>
                            <View style={[s.innerBorder, {width: '100%'}]}>
                                <Text>부모제출용</Text>
                            </View>
                        </View>

                        <View style={s.tail}>
                            <Text>
                                상기와 같이 근무하였음을 확인합니다.
                            </Text>
                            <Text>
                                2023년 7월 21일
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