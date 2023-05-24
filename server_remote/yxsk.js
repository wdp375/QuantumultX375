
// sign()
// getCookie()

let tokenVal='PHPSESSID=f6bcf96133c124f973b24d4ff6651665'
function yxsign(tokenVal) {
    console.log('start sign funcation !!!!:'+tokenVal);
    const url = 'http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/sign/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html';
    const method = 'POST';
    const headers = {
    'X-Requested-With' : 'XMLHttpRequest',
    'Connection' : 'keep-alive',
    'Accept-Encoding' : 'gzip, deflate',
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8', 
    'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002528) NetType/4G Language/zh_CN',
    'Cookie' :tokenVal,
    'Host' : '61694f02ba69d851707731gdjwqmad.work.faquanbao.cn',
    'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
    'Accept' : '*/*'
    };
    const body = 'submit=submit';

    const myRequest = {
        url: url,
        method: method,
        headers: {},
        body: body
    };
    $task.fetch(myRequest).then(response => {
        console.log(response.statusCode + "\n\n" );
        $notify("yxsk", "Sign success",'')
        $done();
    }, reason => {
        console.log(reason.error);
        $done();
    });
  }
yxsign(tokenVal)