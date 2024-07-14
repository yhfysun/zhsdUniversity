export const getTabCourseList = async () => {
	console.log('getTabCourseList request');
	const {rows} = await uni.$http.get('/app/course/list');
	return rows;
};


// #ifndef H5
module.exports = {
	getTabCourseList
}
// #endif

