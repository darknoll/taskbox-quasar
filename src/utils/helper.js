export function getDateFromStamp(value) {
  if (!value) {
    return '';
  }
  let result = (value - 25569 - 1 / 3) * 86400;
  let timeStamp = parseInt(result) + 1;
  let date = new Date(timeStamp * 1000);

  Date.prototype.Format = function(format) {
    let o = {
      'M+': this.getMonth() + 1, //month
      'd+': this.getDate(), //day
      'h+': this.getHours(), //hour
      'm+': this.getMinutes(), //minute
      's+': this.getSeconds(), //second
      'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
      S: this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format))
      format = format.replace(
        RegExp.$1,
        (this.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (let k in o)
      if (new RegExp('(' + k + ')').test(format))
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
    return format;
  };
  return date.Format('yyyy-MM-dd');
}
