// blhxfy_inject = type=http-response,pattern=(game\.granbluefantasy\.jp)|(gbf\.game\.mbga\.jp),requires-body=1,max-size=262144,script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/gbf/gbf_blhxfy.js
// http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/index/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html
// work\.faquanbao\.cn
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
  }
  
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
  
  let { body, headers } = $response;
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
  
  $done(result);