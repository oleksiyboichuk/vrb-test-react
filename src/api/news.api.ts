import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAllNews } from '../types/news.type';

const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '18da8edd681a4751bc6ec3937b96cdbd';

const transformResponse = (response: { articles: IAllNews[] }) => {
	return {
		articles: response.articles.map(article => ({
			author: article.author,
			title: article.title,
			description: article.description,
			urlToImage: article.urlToImage,
		})),
	};
};

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		paramsSerializer: (params) => {
			const searchParams = new URLSearchParams();
			Object.entries(params).forEach(([key, value]) => {
				searchParams.append(key, String(value));
			});
			return searchParams.toString();
		},
	}),
	endpoints: (builder) => ({
		getNews: builder.query({
			query: (pageSize: number) => ({
				url: '',
				params: {
					q: 'bitcoin',
					apiKey: API_KEY,
					pageSize: pageSize,
				},
			}),
			transformResponse
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
