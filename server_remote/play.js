// import requests
// import re
// import execjs


const request = require('request')

request('https://www.baidu.com/', function (err, response, body) {

  /*
    response 响应信息的集合
  */

  if (!err && response.statusCode == 200) { 
    console.log(body)
  }
})

// url = 'http://www.gsxt.gov.cn/corp-query-entprise-info-hot-search-list.html?province=100000'

// headers = {
//     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",
// }
// s = request.Session()
// html = s.get(url,headers=headers)
// print(html.text)

// result = html.text

// a = re.sub(r'while\(z\+\+\)try.*','',result,re.S)
// a = re.sub('<script>','',a,re.S)

// a += '''
// function get_ck() {
//     return y.replace(/\\b\w+\\b/g, function (y) {
//         return x[f(y, z+1) - 1] || ("_" + y)
//     });
// }
// '''

// print('-----',a)
// rrr = execjs.compile(a)
// print(rrr)
// one_res = rrr.eval('get_ck()')

// pp_2 = re.search("document\.(cookie=.*?)\+';",one_res,re.S).group(1)

// pp_2 = 'window = {};' + pp_2

// cook = execjs.compile(pp_2)
// ck = cook.eval('cookie')
// print(ck)

// ck1 = [i[0]+'='+i[1] for i in requests.utils.dict_from_cookiejar(html.cookies).items()][0]

// headers['Cookie'] = ck + ';' + ck1
// print(headers)

// res2 = s.get(url,headers=headers)
// # print(res2.text)

// info_url = 'http://www.gsxt.gov.cn/%7B5C44891C346528CEC7524E1F16B9AA821790292071F659C00D5C74E16624C05549CE61F83564DD3BCCE402F54C50E9B81603A9AC628DD4F916BCB19C7392B4D8F28FF28FF29EB4C98E5C1B661B661B5C1B6627512C4106473A106D0076BF3C2F6D4F878E21329E82AAA31F5E1F6914ECFF1BEC5059F6E5829175827AC325D26BECFFF64A0B760B760B76-1589792558592%7D'

// ttt = res3 = s.get(info_url,headers=headers)
// print(ttt.text)