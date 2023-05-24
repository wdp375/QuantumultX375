
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
    console.log("headers=========> \n"+headers)
    const body = 'submit=submit';

    const myRequest = {
        url: url,
        headers: headers,
        body: body
    };

  // 重新发送修改后的请求
    $httpClient.get(myRequest, (error, response, data) => {
        console.log('------------block---------------------\n')
        console.log(typeof response) // string
        ss = JSON.stringify(response.headers)
        console.log('headers---response-------\n'+ss);
        console.log('\n----- response header:'+response.headers)
        console.log('\n----- response body:'+ data)
        $done({ response: { body: data } })
    });
  }


console.log("----- tim -----") ;
const token = document.cookie.split(";")[0]
console.log(token) ;
$notification.post("cookie token",token);
yxsign(token)
console.log("----- tim -----yxsign over --------------------") ;

  

