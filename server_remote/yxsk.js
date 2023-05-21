
// sign()
getCookie()

function sign(tokenVal) {
    console.log('start sign funcation !!!!');
    let url = {
      url: `http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/sign/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html`,
    }
    const method = `POST`;
    const headers = {
    'X-Requested-With' : `XMLHttpRequest`,
    'Connection' : `keep-alive`,
    'Accept-Encoding' : `gzip, deflate`,
    'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`, 
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002528) NetType/4G Language/zh_CN`,
    'Cookie' :tokenVal,
    'Host' : `61694f02ba69d851707731gdjwqmad.work.faquanbao.cn`,
    'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
    'Accept' : `*/*`
    };
    const body = `submit=submit`;
    url.headers = headers 
    const myRequest = {
        url: url,
        method: method,
        headers: headers,
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

function getCookie(){
    console.log('start getCookie funcation !!!!');
    const url = `http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/index/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html`;
    const method = `GET`;
    const headers = {
    'Connection' : `keep-alive`,
    'Accept-Encoding' : `gzip, deflate`,
    'Upgrade-Insecure-Requests' : 1, 
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002529) NetType/WIFI Language/zh_CN`,
    'Host' : `61694f02ba69d851707731gdjwqmad.work.faquanbao.cn`, 
    'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
    'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
    };
    const myRequest = {
        url: url,
        method: method,
        headers: headers,
        body: null
    };

    $task.fetch(myRequest).then(response => {
        console.log(response.statusCode + "\n\n" + response.headers['Set-Cookie']);
        yxsk_cookie= response.headers['Set-Cookie']
        console.log('Set-Cookie:'+yxsk_cookie);
        const result = JSON.parse(yxsk_cookie)
        console.log("tookie:"+result['PHPSESSID']);
        // Set-Cookie: PHPSESSID=3942890d626297dcf4f2b1aad4f57dc8; path=/; domain=.work.faquanbao.cn; HttpOnly
        // Cookie: PHPSESSID=3942890d626297dcf4f2b1aad4f57dc8
        cookie_str='PHPSESSID='+result['PHPSESSID']
        $notify("yxsk", "get cookie success", cookie_str])
        sign(cookie_str)

        $done();
    }, reason => {
        console.log(reason.error);
        $done();
    });
}
  
