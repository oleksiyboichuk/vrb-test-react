import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INews } from '../../types/news.type';

export interface NewsItem {
	news: INews;
}

const initialState: NewsItem[] = []

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		addToNews: (state, action: PayloadAction<INews>) => {

		},
		removeFromNews: (state, action: PayloadAction<{ id: number }>) => {

		},
	},
})

export const newsReducer = newsSlice.reducer
export const newsActions = newsSlice.actions
