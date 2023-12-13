import { useEffect, useState } from 'react';
import { SearchInput } from '../../components/common/SearchInput';
import { IndexData } from '../../components/common/Data';
import * as S from './style'
import { SearchData } from '../../components/common/Data/SearchData';
import { Pagination } from '../../components/common/Pagination';
import { SearchModal } from '../../components/common/SearchListModal';
import { getSearchList } from '../../apis/common/searchList';
import { useSearchParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

interface ListData {
    createdAt: string;
    modifiedAt: string;
    term_id: number;
    name: string;
    birthdate: string;
    address: string;
    firstTenure: string;
    lastTenure: string;
    occupation: string;
    department: string;
    userName: string;
    userNumber: string;
}

export const SearchListPage = () => {

    const [total, setTotal] = useState<number>(0);
    const [pageData, setPageData] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);
    const [modalName, setModalName] = useState<string>("");
    const [modalId, setModalId] = useState<number>();
    const [searchParams, setSearchParams] = useSearchParams();
    const [listData, setListData] = useState<ListData[]>([]);

    const ParamName = searchParams.get('name');
    const Parambirthdate = searchParams.get('birthdate');

    useTitle(`'${ParamName}' 검색 결과`)

    useEffect(() => {
        const getData = async () => {
            if (ParamName && Parambirthdate) {
                const data = await getSearchList({ name: ParamName, birthdate: Parambirthdate });
                setListData(data);
                if (data) {
                    setTotal(data.length);
                }
            }
        };
        getData();
    }, [ParamName, Parambirthdate])

    const HandleDetail = (modalId: number, modalName: string) => {
        setOpen(true);
        setModalId(modalId);
        setModalName(modalName);
    }

    return (
        <S.Background>
            <S.InputFlex>
                {
                    ParamName && Parambirthdate && (
                        <SearchInput propsName={ParamName} propsDate={Parambirthdate} />
                    )
                }
            </S.InputFlex>
            <S.TotalList>총 {total}건 검색됨</S.TotalList>
            <S.ListDataFlex>
                <IndexData type='search'></IndexData>
                {
                    listData && listData.map((v) => {
                        return (
                            < SearchData
                                key={v.term_id}
                                id={v.term_id}
                                name={v.name}
                                department={v.department}
                                birthdate={v.birthdate}
                                manager={v.userName}
                                occupation={v.occupation}
                                tenure={v.occupation}
                                onClick={() => HandleDetail(v.term_id, v.name)} />
                        );
                    })
                }
            </S.ListDataFlex>
            <S.PaginationFlex>
                {
                    total && (
                        <Pagination total={total} nowPage={pageData} setNowPage={setPageData} />
                    )
                }
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