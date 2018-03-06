
//格式化时间一
export const formatDate = (str) => {
	if(!str) return ''
	var date = new Date(Date.parse(str.replace(/-/g,"/"))).getTime()
    var time = new Date().getTime() - date  //相差的时间 = 现在的时间 - 传入的时间 （单位：毫秒）
    if (time < 0) {
        return ''
    } 
    else if ((time / 1000 < 30)) {

        return '刚刚'
    } 
    else if (time / 1000 < 60) {
        return "发表于 " +parseInt((time / 1000)) + '秒前'
    } 
    else if ((time / 60000) < 60) {
        return "发表于 " +parseInt((time / 60000)) + '分钟前'
    } 
    else if ((time / 3600000) < 24) {
        return "发表于 " +parseInt(time / 3600000) + '小时前'
    } 
    else if ((time / 86400000) < 31) {
        return "发表于 " +parseInt(time / 86400000) + '天前'
    } 
    else if ((time / 2592000000) < 12) {
        return "发表于 " +parseInt(time / 2592000000) + '月前'
    } 
    else {
        return "发表于 " +parseInt(time / 31536000000) + '年前'
    }

} 

//格式化时间二
// export const date =(str)=>{
// 	var now = new Date().getTime(),
// 	// var now = new Date().getTime(),
// 	oldTime = new Date(Date.parse(str.replace(/-/g,"/"))).getTime(),
// 	 // oldTime = new Date(str).getTime(),
// 	 difference = now - oldTime,
// 	 result='',
// 	 minute = 1000 * 60,
// 	 hour = minute * 60,
// 	 day = hour * 24,
// 	 halfamonth = day * 15,
// 	 month = day * 30,
// 	 year = month * 12,
	 
// 	 _year = difference/year,
// 	 _month =difference/month,
// 	 _week =difference/(7*day),
// 	 _day =difference/day,
// 	 _hour =difference/hour,
// 	 _min =difference/minute;
// 	 if(_year>=1) {result= "发表于 " + ~~(_year) + " 年前"}
// 	 else if(_month>=1) {result= "发表于 " + ~~(_month) + " 个月前"}
// 	 else if(_week>=1) {result= "发表于 " + ~~(_week) + " 周前"}
// 	 else if(_day>=1) {result= "发表于 " + ~~(_day) +" 天前"}
// 	 else if(_hour>=1) {result= "发表于 " + ~~(_hour) +" 个小时前"}
// 	 else if(_min>=1) {result= "发表于 " + ~~(_min) +" 分钟前"}
// 	 else result="刚刚";
// 	 return result;
// }
