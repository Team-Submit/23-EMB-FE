import { useEffect, useState } from 'react';
import { SearchInput } from '../../components/common/SearchInput';
import { IndexData } from '../../components/common/Data';
import * as S from './style'
import { SearchData } from '../../components/common/Data/SearchData';
import { Pagination } from '../../components/common/Pagination';
import { SearchModal } from '../../components/common/SearchListModal';
import { getSearchList } from '../../apis/common/searchList';
import { useSearchParams } from 'react-router-dom';

const testData = [{
    id: 1,
    name: "홍길동",
    department: "방가루부",
    birthdate: "0611",
    manager: "담당자",
    occupation: "재직기간",
    tenure: "직종",
},
{
    id: 2,
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
    const [modalId, setModalId] = useState<number>();
    const [searchParams, setSearchParams] = useSearchParams();
    const [listData, setListData] = useState();

    const ParamName = searchParams.get('name');
    const Parambirthdate = searchParams.get('birthdate');

    useEffect(() => {
        // const data = getSearchList(ParamName, Parambirthdate);
        // setListData(data); api연동시 변경 예정
    }, [])

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
                                key={v.id}
                                name={v.name}
                                department={v.department}
                                birthdate={v.birthdate}
                                manager={v.manager}
                                occupation={v.occupation}
                                tenure={v.tenure}
                                onClick={(e) => {
                                    setOpen(true);
                                    setModalName(v.name);
                                    setModalId(v.id);
                                }} />
                        );
                    })
                }

            </S.ListDataFlex>
            <S.PaginationFlex>
                <Pagination total={total} nowPage={pageData} setNowPage={setPageData} />
            </S.PaginationFlex>
            <SearchModal
                OpenProps={open}
                SetOpenProps={setOpen}
                ModalName={modalName}
                ModalId={modalId}
            />
        </S.Background>
    );
}