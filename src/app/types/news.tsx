import { Dispatch, SetStateAction } from "react"

export interface News {
    id: number
    name: string
}

export interface Props_ForNewsBox {
    news : News[]
    setNews : Dispatch<SetStateAction<News[]>>
    setEditNews :Dispatch<SetStateAction<News>>
    setIsOpen : Dispatch<SetStateAction<boolean>>
    setIsAdd : Dispatch<SetStateAction<boolean>>
}

export interface Props_ForSetNews{
    newsNameValue :string 
    setNewsNameValue : Dispatch<SetStateAction<string>>
    onClose : () => void
    setNews : Dispatch<SetStateAction<News[]>>
}

export interface Props_ForAddOrEditNewsModal {
    isAdd: boolean 
    setNews : Dispatch<SetStateAction<News[]>>
    isOpen : boolean 
    onClose : () => void 
    editNews : News
}