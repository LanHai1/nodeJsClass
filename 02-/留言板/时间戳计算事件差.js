function getTime(faultDat, completeTime) {
    var stime = Date.parse(new Date(faultDat));
    var etime = Date.parse(new Date(completeTime));
    var usedTime = etime - stime;  //两个时间戳相差的毫秒数
    var days = Math.floor(usedTime / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = usedTime % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    var time = days + "天" + hours + "时" + minutes + "分" + seconds + " 秒";
    return time;
}
console.log(getTime(1546411435441, 1546411640398))
