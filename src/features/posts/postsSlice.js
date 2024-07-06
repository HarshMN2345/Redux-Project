import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'
const initialState=[
    {id:'1',title:'Redact is great',content:'lorem',date:sub(new Date(),{minutes:10}).toISOString},
    {id:'2',title:'Redux is great',content:'allah is great no god is god',date:sub(new Date(),{minutes:10}).toISOString}
]
const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId
                }
            
        }}
    }
}})
export const selectAllPosts=(state)=>state.posts;
export const { postAdded }=postsSlice.actions;
export default postsSlice.reducer;