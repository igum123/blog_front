var Request = new (function () {
    function getXMLHttpRequest() {
        var xhr = null;
        if (window.XMLHttpRequest || window.ActiveXObject) {
            if (window.ActiveXObject) {
                try {
                    xhr = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
            } else {
                xhr = new XMLHttpRequest();
            }
        } else {
            alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
            return null;
        }
        return xhr;
    }

    function parseResponseHeaders(headerStr) {
        var headers = {};
        if (!headerStr) {
            return headers;
        }
        var headerPairs = headerStr.split('\u000d\u000a');
        for (var i = 0; i < headerPairs.length; i++) {
            var headerPair = headerPairs[i];
            // Can't use split() here because it does the wrong thing
            // if the header value has the string ": " in it.
            var index = headerPair.indexOf('\u003a\u0020');
            if (index > 0) {
                var key = headerPair.substring(0, index);
                var val = headerPair.substring(index + 2);
                headers[key] = val;
            }
        }
        return headers;
    }

    this.post = function (url, object, headers) {
        return new Promise(function (resolve, reject) {
            let xmlhttp = getXMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var response = undefined;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        window.location = '/';
                    }
                    resolve({ headers: parseResponseHeaders(xmlhttp.getAllResponseHeaders()), response: response });
                } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                    if (xmlhttp.status === 302) {
                        window.location = '/';
                    }
                    var response;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        response = { message: 'Request to serveur failed' };
                    }
                    reject({ headers: { ...parseResponseHeaders(xmlhttp.getAllResponseHeaders()), code: xmlhttp.status }, response: response });
                }
            };
            xmlhttp.ontimeout = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            }
            xmlhttp.onerror = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            };
            var params = JSON.stringify(object);
            xmlhttp.open("POST", url, true);
            if (headers) {
                for (var key in headers) {
                    xmlhttp.setRequestHeader(key, headers[key]);
                }
            }
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.send(params);
        });
    }

    this.upload = function (url, files, object, headers, onprogress) {
        console.log(files, object)
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            let xmlhttp = getXMLHttpRequest();
            if (files) {
                for (var i in files) {
                    formData.append(i, files[i]);
                }
            }
            if (object) formData.append('data', JSON.stringify(object));
            xmlhttp.open('post', url, true);
            if (onprogress) {
                xmlhttp.addEventListener('progress', onprogress, false);
            }
            xmlhttp.addEventListener('readystatechange', function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var response = undefined;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        window.location = '/';
                    }
                    resolve({ headers: parseResponseHeaders(xmlhttp.getAllResponseHeaders()), response: response });
                } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                    if (xmlhttp.status === 302) {
                        window.location = '/';
                    }
                    var response;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        response = { message: 'Request to serveur failed' };
                    }
                    reject({ headers: { ...parseResponseHeaders(xmlhttp.getAllResponseHeaders()), code: xmlhttp.status }, response: response });
                }
            }, false);
            xmlhttp.ontimeout = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            }
            xmlhttp.onerror = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            };
            if (headers) {
                for (var key in headers) {
                    xmlhttp.setRequestHeader(key, headers[key]);
                }
            }
            xmlhttp.send(formData);
        });
    }

    this.get = function (url, headers) {
        return new Promise(function (resolve, reject) {
            let xmlhttp = getXMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var response = undefined;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        window.location = '/';
                    }
                    resolve({ headers: parseResponseHeaders(xmlhttp.getAllResponseHeaders()), response: response });
                } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                    if (xmlhttp.status === 302) {
                        window.location = '/';
                    }
                    var response;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        response = { message: 'Request to serveur failed' };
                    }
                    reject({ headers: { ...parseResponseHeaders(xmlhttp.getAllResponseHeaders()), code: xmlhttp.status }, response: response });
                }
            };
            xmlhttp.ontimeout = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            }
            xmlhttp.onerror = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            };
            xmlhttp.open("GET", url, true);
            if (headers) {
                for (var key in headers) {
                    xmlhttp.setRequestHeader(key, headers[key]);
                }
            }
            xmlhttp.send(null);
        });
    }

    this.deleteRequest = function (url, object, headers) {
        return new Promise(function (resolve, reject) {
            let xmlhttp = getXMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var response = undefined;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        window.location = '/';
                    }
                    resolve({ headers: parseResponseHeaders(xmlhttp.getAllResponseHeaders()), response: response });
                } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                    if (xmlhttp.status === 302) {
                        window.location = '/';
                    }
                    var response;
                    try {
                        response = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        response = { message: 'Request to serveur failed' };
                    }
                    reject({ headers: { ...parseResponseHeaders(xmlhttp.getAllResponseHeaders()), code: xmlhttp.status }, response: response });
                }
            };
            xmlhttp.ontimeout = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            }
            xmlhttp.onerror = function (e) {
                console.error(e);
                reject({ response: { message: 'Request to serveur failed' } });
            };
            var params = undefined;
            if (object) {
                params = JSON.stringify(object);
            }
            xmlhttp.open("DELETE", url, true);
            if (headers) {
                for (var key in headers) {
                    xmlhttp.setRequestHeader(key, headers[key]);
                }
            }
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.send(params);
        });
    }
})();

export default Request;