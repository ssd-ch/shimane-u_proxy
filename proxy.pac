function FindProxyForURL(url, host) {
 if ((isPlainHostName(host) ||
 dnsDomainIs(host, "shimane-u.ac.jp")) &&
 !! localHostOrDomainIs(host, "www.shimane-u.ac.jp") &&
 !! localHostOrDoaminIs(host, "www.cis.shimane-u.ac.jp"))
 return "DIRECT";
 else
 return "127.0.0.1:8888";
}