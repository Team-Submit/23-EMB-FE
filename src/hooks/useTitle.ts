import { useEffect } from "react";

export default function useTitle(title? : string){
    const htmlTitle = document.querySelector("title");

    function setTitle(){
        if(htmlTitle){
            htmlTitle.innerText = `${title}⋅emb`;
        }
    }

    useEffect(setTitle, [htmlTitle, title]);
    return {setTitle};
}