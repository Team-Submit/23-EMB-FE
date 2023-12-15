import { useEffect, useRef, useState } from "react";
import { Input } from "../Input";
import * as S from "./style";
import { hangulIncludes } from "@toss/hangul";
import { Plus } from "../../../assets/icons/Plus";
import { color } from "../../../styles/theme";

interface InputAutoProps {
  label: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;

  list: string[];
}

/** < InputAuto value={값} setValue={set값} list={문자 배열} label={label} placeholder?={placeholder} /> */
export const InputAuto =({
  label,
  placeholder,
  value,
  list,
  setValue,
}: InputAutoProps) => {
  const selectListRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      if (
        isOpen &&
        selectListRef.current &&
        !selectListRef.current.contains(e.target)
      )
        setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isOpen]);

  return (
    <S.Container ref={selectListRef}>
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && (
        <S.ListContainer>
          {list.filter((v) => hangulIncludes(v, value)).length === 0 ? (
            <S.ListNewValue
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <Plus fill={color.Gray[75]} />
              <p>새로 추가</p>
            </S.ListNewValue>
          ) : (
            list
              .filter((v) => hangulIncludes(v, value))
              .map((v) => (
                <>
                  <S.ListValue
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setValue(v);
                      setIsOpen(false);
                    }}
                    key={v}
                  >
                    {v}
                  </S.ListValue>
                  <hr />
                </>
              ))
          )}
        </S.ListContainer>
      )}
    </S.Container>
  );
};
