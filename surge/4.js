// // 获取 request binary body
// var binaryBody = $request.body;
// var msg = Request.fromBinary(binaryBody); //转成 object
// /**
//  * 做一些修改
//  */
// $request.body = Request.toBinary(msg) //转回 binary
// console.log($request.body instanceof Uint8Array) // true
// console.log($request.headers) // {"accept":"*\/*","content-type":"application\/x-protobuf"... } 这里 content-type 为protobuf

const toInsert = `
        <script>
        (function () {
        const script = document.createElement("script");
        script.src = "xxxr.js";
        document.head.appendChild(script);
        })();
        </script>
        `;
const toInsert1 = `
<script>
console.log("----- tim -----") ;
console.log(document.cookie) ;
</script>
`;

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
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

// 重新发送修改后的请求
$httpClient.get(options, (error, response, data) => {
    console.log('------------block---------------------\n')
    console.log(typeof response) // string
    /**
     * 做一些修改
     */
    ss = JSON.stringify(response.headers)
    console.log('headers---response-------\n'+ss);
    console.log('\n----- response header:'+response.headers)
    console.log('\n----- response body:'+ data)

    const result = {};
    result.body = insert(data, data.lastIndexOf("</head>"), toInsert);
    result.headers = response.headers;
    console.log('\n----after-----===================>>>>>>>>>>>>>>>>>>>\n response body:'+ result.body )
    $done(result)
    // $done({ response: { body: data } })
});