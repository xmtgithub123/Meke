import axios from 'axios'

const defaults = {
	baseURL:'http://stg-api.meikeapp.party',
	// transformResponse:[(data)=> {
	// 	return JSON.parse(replaceImageUrl(data))
	// }]
}


Object.assign(axios.defaults , defaults)
export const fetchList = () => {
	// console.log(axios.get(`/v1/topics`))
	return axios.get(`/api/v1/posts`,{params:{page:0,limit:10}})
}