#!/usr/bin/python3
import requests

def functionGetToken():
    url = "http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/index/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html"
    headers = {
        "Connection" : "keep-alive",
        "Accept-Encoding" : "gzip, deflate",
        "Upgrade-Insecure-Requests" : "1", 
        "User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002529) NetType/WIFI Language/zh_CN",
        "Host" : "61694f02ba69d851707731gdjwqmad.work.faquanbao.cn", 
        "Accept-Language" : "zh-CN,zh-Hans;q=0.9",
        "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
    }
    rusult = requests.get(url,headers=headers)
    # print(rusult.text)
    if rusult.status_code == 200:
        cookiejar = rusult.cookies
        cookiedict = requests.utils.dict_from_cookiejar(cookiejar)
        # print(cookiejar)
        # print(cookiedict)
        if cookiedict["PHPSESSID"]:
            return "PHPSESSID="+cookiedict["PHPSESSID"]

    print("--------------------functionGet over !!!")

def functionSign(tokenVal):
    url = "http://61694f02ba69d851707731gdjwqmad.work.faquanbao.cn/index.php/wap/clockin/sign/corpid/ww05254b704b73e671/id/L067QVJMbw5ChNOXXzuQyVUo4w.html"
    headers = {
    "X-Requested-With" : "XMLHttpRequest",
    "Connection" : "keep-alive",
    "Accept-Encoding" : "gzip, deflate",
    "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8", 
    "User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002528) NetType/4G Language/zh_CN",
    "Cookie" :tokenVal,
    "Host" : "61694f02ba69d851707731gdjwqmad.work.faquanbao.cn",
    "Accept-Language" : "zh-CN,zh-Hans;q=0.9",
    "Accept" : "*/*"
    }
    body = "submit=submit"
    r = requests.post(url,headers=headers,data=body)
    if r.status_code == 200:
        print(r.text)
    print("--------------------functionSign over !!!")

    
if __name__ == "__main__":
    print("--------------------start !!!")
    token = functionGetToken()
    functionSign(token)