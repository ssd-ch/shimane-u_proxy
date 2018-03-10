function FindProxyForURL(url, host) {
 if (localHostOrDoaminIs(host, "nafs.cosmos.shimane-u.ac.jp") || 
     localHostOrDoaminIs(host, "gakumuweb.shimane-u.ac.jp"))
    return "PROXY 10.10.10.100:8080";
 else
    return "DIRECT";
}