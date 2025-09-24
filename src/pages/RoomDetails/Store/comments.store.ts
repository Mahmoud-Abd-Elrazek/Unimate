import {create} from 'zustand'
import { persist } from 'zustand/middleware';


interface commentsState{
    show:boolean;
    setShow:(show:boolean)=>void
}
export const useCommentsStore=create<commentsState>()(
persist(
    (set)=>({
        show:false,
        setShow: (show: boolean) => set({ show })
    }),
    {
        name:"comments"
    }
)
)