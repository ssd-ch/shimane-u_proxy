function FindProxyForURL(url, host) {
 if (localHostOrDoaminIs(host, "www.shimane-u.ac.jp") || 
     localHostOrDoaminIs(host, "www.cis.shimane-u.ac.jp"))
    return "PROXY 10.10.10.100:8080";
 else
    return "DIRECT";
}