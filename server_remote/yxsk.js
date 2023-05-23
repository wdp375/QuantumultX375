
// sign()
// getCookie()

const $ = Env('yxsk')

getInfo1()

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

function getCookie(){
    console.log('start getCookie funcation !!!!');
    const url = 'http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/index/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html';
    const method = 'GET';
    const headers = {
    'Connection' : 'keep-alive',
    'Accept-Encoding' : 'gzip, deflate',
    'Upgrade-Insecure-Requests' : '1', 
    'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002529) NetType/WIFI Language/zh_CN',
    'Host' : '61694f02ba69d851707731gdjwqmad.work.faquanbao.cn', 
    'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
    'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    };
    const myRequest = {
        url: url,
        method: method,
        headers: headers,
        body: ''
    };

    $.get(myRequest, async (err, resp, data) => {
      try {
        console.log('------- start')
        let setcookies = (resp && resp["headers"] && (resp["headers"]["set-cookie"] || resp["headers"]["Set-Cookie"] || "")) || "";
        let setcookie = "";
        console.log('setcookies ------- '+setcookies)
        if (setcookies) {
          if (typeof setcookies != "object") {
            setcookie = setcookies.split(",");
          } 
          else setcookie = setcookies;
          for (let ck of setcookie) {
            let name = ck.split(";")[0].trim();
            if (name.split("=")[1]) {
              if ($.newCookie.indexOf(name.split("=")[1]) == -1)
                $.newCookie += name.replace(/ /g, "") + "; ";
            }
          }
        }
        // $.url2 = (resp && resp["headers"] && (resp["headers"]["location"] || resp["headers"]["Location"] || "")) || "";
        // $.url2 = decodeURIComponent($.url2);
        // switch (urlID) {
        //   case 'prodev':
        //     $.url2 = ($.url2.match(/(https:\/\/prodev\.m\.jd\.com\/mall[^'"]+)/) && $.url2.match(/(https:\/\/prodev\.m\.jd\.com\/mall[^'"]+)/)[1]) || "";
        //     break;
        //   case 'pro':
        //     $.url2 = ($.url2.match(/(https:\/\/pro\.m\.jd\.com\/mall[^'"]+)/) && $.url2.match(/(https:\/\/pro\.m\.jd\.com\/mall[^'"]+)/)[1]) || "";
        //     break;
        //   default:
        //     break;
        // }
        // console.log($.url2)
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        console.log('--- over')
        // resolve(data);
      }
    });
    // $.get(myRequest, (error, response, data,bodyBytes) => {
    //   try {
    //     console.log('cookie_st----------');
    //     // console.log(response.statusCode + "\n\n" + response.Cookies);
        
        // ss = JSON.stringify(response.headers)
        // console.log('cookie_st---dddd-------\n'+ss);
    //     console.log(response.headers.getSetCookie());
    //     // yxsk_cookie = response.headers['Set-Cookie']
    //     // console.log('Set-Cookie:'+yxsk_cookie);
    //     // cookie_str = yxsk_cookie.split(';')[0]
    //     // console.log('cookie_str:'+cookie_str);
    //   } catch (e) {
    //     console.log('cookie_st---eeee-------'+e);
    //   }
    // })

//   $task.fetch(myRequest).then(response => {
    // console.log(response.statusCode + "\n\n" + response.headers['Set-Cookie']);
    // yxsk_cookie = response.headers['Set-Cookie']
    // console.log('Set-Cookie:'+yxsk_cookie);
    // cookie_str = yxsk_cookie.split(';')[0]
    // console.log('cookie_str:'+cookie_str);
    // $notify("yxsk", "get cookie success", "$cookie_str")
//     sign(cookie_str)

// }, reason => {
//     console.log(reason.error);
//     $done();
// });
    // $.get2(myRequest, (error, response, data) => {
    //   console.log("response:")
    //     console.log("response:"+response.statusCode + "\n\n" + response.status);
    //     console.log('cookies:'+response.cookies + "\n\n");
        // for (let [key, value] of response.headers) {  
        //     console.log(`${key} : ${value}`);  
        // }
    //     console.log('data:\n'+data);
    // })
}

async function getInfo1(cookie) {
  return new Promise((resolve) => {
    const options = {
      url: 'http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/index/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html',
      followRedirect: false,
      headers: {
        Cookie: cookie,
        'Connection' : 'keep-alive',
        'Accept-Encoding' : 'gzip, deflate',
        'Upgrade-Insecure-Requests' : '1', 
        'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002529) NetType/WIFI Language/zh_CN',
        'Host' : '61694f02ba69d851707731gdjwqmad.work.faquanbao.cn', 
        'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
        'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
    };
    $.get(options, async (err, resp, data) => {
      try {
        console.log('------- start'+resp["headers"] )
        ss = JSON.stringify(resp.headers)
        console.log('cookie_st---dddd-------\n'+ss);
        let setcookies = (resp && resp["headers"] && (resp["headers"]["set-cookie"] || resp["headers"]["Set-Cookie"] || "")) || "";
        let setcookie = "";
        console.log('setcookies ------- '+setcookies)
        if (setcookies) {
          if (typeof setcookies != "object") {
            setcookie = setcookies.split(",");
          } 
          else setcookie = setcookies;
          for (let ck of setcookie) {
            let name = ck.split(";")[0].trim();
            if (name.split("=")[1]) {
              if ($.newCookie.indexOf(name.split("=")[1]) == -1)
                $.newCookie += name.replace(/ /g, "") + "; ";
            }
          }
        }
        // console.log($.url1)
        console.log('--- over111')
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        console.log('--- over')
        resolve(data);
      }
    });
  });
}

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}