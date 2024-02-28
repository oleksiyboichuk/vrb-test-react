import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { newsActions } from '../store/news/news.slice'

const allActions = {
	...newsActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(allActions, dispatch)
}
