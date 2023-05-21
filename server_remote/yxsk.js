
// sign()
getCookie()

function sign() {
    const token = JSON.parse(tokenVal)
    let url = {
      url: `https://www.flyert.com/plugin.php?id=k_misign:sign&operation=qiandao&from=insign&version=${token.version}&appcan=appcan&appkey=${token.appkey}&appversion=${token.appversion}&formhash=${token.formhash}&token=${token.token}`,
      headers: { Cookie: cookieVal }
    }
    url.headers['Accept'] = `*/*`
    url.headers['Accept-Language'] = `zh-Hans-CN;q=1`
    url.headers['Host'] = `www.flyert.com`
    url.headers['User-Agent'] = `FKForum/7.28.3 (iPhone 12; iOS 14.5; Scale/3.00)`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Connection'] = `keep-alive`
    $.get(url, (error, response, data) => {
      const result = JSON.parse(data)
      let subTitle = ``
      let detail = ``
      if (result.Variables && result.Variables.Message.messageval == 'success') {
        subTitle = `签到结果: 成功`
        detail = `说明: ${result.Variables.Message.messagestr}`
        $.msg($.name, subTitle, detail)
      } else {
        if (result.Message.messageval == 'error' && result.Message.messagestr.indexOf('只能签到一次') >= 0) {
          subTitle = `签到结果: 成功 (重复签到)`
        } else {
          subTitle = `签到结果: 失败`
        }
        detail = `说明: ${result.Message.messagestr}`
        $.msg($.name, subTitle, detail)
      }
      $.done()
    })
  }

function getCookie(){
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
        body: body
    };

    $task.fetch(myRequest).then(response => {
        console.log(response.statusCode + "\n\n" + response.headers['Set-Cookie']);
        yxsk_cookie= response.headers['Set-Cookie']
        $notify("yxsk", "get cookie success", $yxsk_cookie)
        $done();
    }, reason => {
        console.log(reason.error);
        $done();
    });
}
  
