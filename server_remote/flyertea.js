const $ = new Env('飞客茶馆')

const cookieKey = 'chavy_cookie_flyertea'
const tokenKey = 'chavy_token_flyertea'
const cookieVal = $.getdata(cookieKey)
const tokenVal = $.getdata(tokenKey)

sign()

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
