

const $hammer = (() => {
    const isRequest = "undefined" != typeof $request,
        isSurge = "undefined" != typeof $httpClient,
        isQuanX = "undefined" != typeof $task;

    const log = (...n) => { for (let i in n) console.log(n[i]) };
    const alert = (title, body = "", subtitle = "", options = {}) => {
        // option(<object>|<string>): {open-url: <string>, media-url: <string>}
        let link = null;
        switch (typeof options) {
            case "string":
                link = isQuanX ? {"open-url": options} : options;
                break;
            case "object":
                if(["null", "{}"].indexOf(JSON.stringify(options)) == -1){
                    link = isQuanX ? options : options["open-url"];
                    break;
                }
            default:
                link = isQuanX ? {} : "";
        }
        if (isSurge) return $notification.post(title, subtitle, body, link);
        if (isQuanX) return $notify(title, subtitle, body, link);
        log("==============📣系统通知📣==============");
        log("title:", title, "subtitle:", subtitle, "body:", body, "link:", link);
    };
    const read = key => {
        if (isSurge) return $persistentStore.read(key);
        if (isQuanX) return $prefs.valueForKey(key);
    };
    const write = (val, key) => {
        if (isSurge) return $persistentStore.write(val, key);
        if (isQuanX) return $prefs.setValueForKey(val, key);
    };
    const request = (method, params, callback) => {
        /**
         * 
         * params(<object>): {url: <string>, headers: <object>, body: <string>} | <url string>
         * 
         * callback(
         *      error, 
         *      <response-body string>?,
         *      {status: <int>, headers: <object>, body: <string>}?
         * )
         * 
         */
        let options = {};
        if (typeof params == "string") {
            options.url = params;
        } else {
            options.url = params.url;
            if (typeof params == "object") {
                params.headers && (options.headers = params.headers);
                params.body && (options.body = params.body);
            }
        }
        method = method.toUpperCase();

        const writeRequestErrorLog = function (m, u) {
            return err => {
                log(`\n=== request error -s--\n`);
                log(`${m} ${u}`, err);
                log(`\n=== request error -e--\n`);
            };
        }(method, options.url);

        if (isSurge) {
            const _runner = method == "GET" ? $httpClient.get : $httpClient.post;
            return _runner(options, (error, response, body) => {
                if (error == null || error == "") {
                    response.body = body;
                    callback("", body, response);
                } else {
                    writeRequestErrorLog(error);
                    callback(error, "", response);
                }
            });
        }
        if (isQuanX) {
            options.method = method;
            $task.fetch(options).then(
                response => {
                    response.status = response.statusCode;
                    delete response.statusCode;
                    callback("", response.body, response);
                },
                reason => {
                    writeRequestErrorLog(reason.error);
                    response.status = response.statusCode;
                    delete response.statusCode;
                    callback(reason.error, "", response);
                }
            );
        }
    };
    const done = (value = {}) => {
        if (isQuanX) return isRequest ? $done(value) : null;
        if (isSurge) return isRequest ? $done(value) : $done();
    };
    return { isRequest, isSurge, isQuanX, log, alert, read, write, request, done };
})();

const CookieKey = "StudyGolang";

function GetCookie() {
    const CookieName = CookieKey + "的Cookie";
    try {
        if ($request.headers) {
            const CookieValue = $request.headers['Cookie'];
            const cachedCookie = $hammer.read(CookieKey);
            const dynamic = cachedCookie ? (cachedCookie == CookieValue ? "" : "更新") : "写入";
            if(dynamic){
                const result = $hammer.write(CookieValue, CookieKey);
                $hammer.alert(CookieName, dynamic + (result ? "成功🎉" : "失败"));
            }
        } else {
            $hammer.alert(CookieName, "请检查匹配URL或配置内脚本类型", "写入失败");
        }
    } catch (error) {
        $hammer.alert(CookieName, "未知错误", "写入失败")
        $hammer.log(error)
    }
    $hammer.done();
}

function checkin() {
    // const host = "https://studygolang.com";
    // const cookie = $hammer.read(CookieKey);
    // if (!cookie) {
    //     $hammer.alert(CookieKey, "cookie没有，先去获取吧！", host);
    //     return $hammer.done();
    // }
    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
    const options = {
        url: 'http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/index/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html',
        headers:{
            'Connection' : 'keep-alive',
            'Accept-Encoding' : 'gzip, deflate',
            'Upgrade-Insecure-Requests' : '1', 
            'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002529) NetType/WIFI Language/zh_CN',
            'Host' : '61694f02ba69d851707731gdjwqmad.work.faquanbao.cn', 
            'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
            'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
        body:'',
    };
    
    $hammer.request("get", options, (error, response, ret) => {
        console.log("------------------------- >>>>>>>>>>>>>>>>\n"+ret.body)
        const toInsert = `
        <script>
        (function () {
        // const script = document.createElement("script");
        // script.src = "xxxr.js";
        // document.head.appendChild(script);
        console.log("----- tim -----") ;
        console.log(document.cookie) ;
        $notification.post("cookie",document.cookie);
        })();
        </script>
        `;
        
        let { body, headers } = $ret;
        const result = {};
        
        if (
            body &&
            headers &&
            typeof headers["Content-Type"] === "string" &&
            headers["Content-Type"].includes("text/html") &&
            body.lastIndexOf("</head>") !== -1
        ) {
            result.body = insert(body, body.lastIndexOf("</head>"), toInsert);
            result.headers = headers;
        }
        console.log("-------------------------\n"+ret.body)
        $done(result);
        // if (error) {
        //     let desc = "响应异常，去看一下日志";
        //     if(ret.status == 303){
        //         if(ret.headers?.Location == "/mission/daily?fr=redeem"){
        //             $hammer.alert(CookieKey, "签到完成");
        //             return $hammer.done();
        //         }
        //         if (response.indexOf("account/login") > 0) {
        //             desc = "cookie已过期，需要重新获取";
        //         }
        //     }
        //     $hammer.log(`${CookieKey}签到结果(1)：`, ret);
        //     $hammer.alert(CookieKey, desc, "签到请求失败", host);
        //     return $hammer.done();
        // }
        // if(response.indexOf("已成功领取每日登录奖励")>0){
        //     $hammer.alert(CookieKey, "签到完成");
        //     return $hammer.done();
        // }
        // $hammer.log(`${CookieKey}签到结果(2)：`, ret);
        // const desc = response.indexOf("user_remember_me") > 0 ? "cookie已过期，请重新获取" : "响应异常，去看一下日志";
        // $hammer.alert(CookieKey, desc, "签到失败", host);
        // $hammer.done();
    })
}

$hammer.isRequest ? checkin() : checkin();