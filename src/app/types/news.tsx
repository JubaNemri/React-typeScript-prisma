import { Dispatch, SetStateAction } from "react"

export interface News {
    id: number
    name: string
}

export interface Props_ForNewsBox {
    news : News[]
    setMyNews : Dispatch<SetStateAction<News[]>>
    setEditNews :Dispatch<SetStateAction<News>>
    setIsOpen : Dispatch<SetStateAction<boolean>>
    setIsAdd : Dispatch<SetStateAction<boolean>>
}

export interface Props_ForSetNews{
    newNewsName :string 
    setNewNewsName : Dispatch<SetStateAction<string>>
    onClose : () => void
    setMyNews : Dispatch<SetStateAction<News[]>>
}

export interface Props_ForAddOrEditNewsModal {
    isAdd: boolean 
    setMyNews : Dispatch<SetStateAction<News[]>>
    isOpen : boolean 
    onClose : () => void 
    editNews : News
  }