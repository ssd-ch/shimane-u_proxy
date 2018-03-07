function FindProxyForURL(url, host) {
 if ((isPlainHostName(host) || localHostOrDoaminIs(host, "www.cis.shimane-u.ac.jp"))
    return "PROXY 10.10.10.100:8080";
 else
    return "DIRECT";
}