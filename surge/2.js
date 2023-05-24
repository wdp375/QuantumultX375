//收藏排行前10，长按通知进入（iOS13以下通知中心不支持）
let url = $request.url
let regex = /vmid=(\d*)/
let vmid = regex.exec(url)
let mid = vmid[1]
let api = `http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/index/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html`
$httpClient.get(api, (error, response, body) => {
  if (error) {
    $done({})
  }
  else {
    console.log(body)
    body = JSON.parse(body)
    let info = ""
    body['data']['vlist'].forEach((element, index) => {
      index++
      let scheme = `bilibili://av/${element['aid']}`
      info += index + ": " + element['title'] + "\n" + scheme + "\n"
    })
    $notification.post('', '', info)
    $done({})
  }
})