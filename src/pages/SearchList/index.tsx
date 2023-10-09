import { useState } from 'react';
import { SearchInput } from '../../components/common/SearchInput';
import { IndexData } from '../../components/common/Data';
import * as S from './style'
import { SearchData } from '../../components/common/Data/SearchData';
import { Pagination } from '../../components/common/Pagination';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../styles/common/Button';

const testData = [{
    name: "홍길동",
    department: "방가루부",
    birthdate: "0611",
    manager: "담당자",
    occupation: "재직기간",
    tenure: "직종",
},
{
    name: "어썸드래곤",
    department: "방가루부",
    birthdate: "0611",
    manager: "담당자",
    occupation: "재직기간",
    tenure: "직종",
},
]

export const SearchListPage = () => {

    const [total, setTotal] = useState<number>(100);
    const [pageData, setPageData] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);
    const [modalName, setModalName] = useState<string>("");

    return (
        <S.Background>
            <S.InputFlex>
                <SearchInput />
            </S.InputFlex>
            <S.TotalList>총 {total}건 검색됨</S.TotalList>
            <S.ListDataFlex>
                <IndexData type='search'></IndexData>
                {
                    testData.map((v) => {
                        return (
                            < SearchData
                                name={v.name}
                                department={v.department}
                                birthdate={v.birthdate}
                                manager={v.manager}
                                occupation={v.occupation}
                                tenure={v.tenure}
                                onClick={(e) => {
                                    setOpen(true);
                                    setModalName(v.name);
                                }} />
                        );
                    })
                }

            </S.ListDataFlex>
            <S.PaginationFlex>
                <Pagination total={total} nowPage={pageData} setNowPage={setPageData} />
            </S.PaginationFlex>
            {open &&
                <Modal isOpen>
                    <S.ModalTitle>정말 열람하시겠습니까?</S.ModalTitle>
                    <S.ModalBody>{modalName}</S.ModalBody>
                    <S.ModalBody>개인 정보 보호를 위해 열람 전 정보가 정확한지 확인하세요</S.ModalBody>
                    <S.MoadlBtnFlex>
                        <Button colorType="Point" size="M" onClick={() => { }}>열람</Button>
                        <Button colorType="Gray" size="M" onClick={() => setOpen(false)}>취소</Button>
                    </S.MoadlBtnFlex>
                </Modal>
            }
        </S.Background>
    );
}