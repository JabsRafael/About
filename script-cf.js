document.getElementById('generateFingerprint').addEventListener('click', function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'Canvas fingerprinting example';
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);

    
    var src = canvas.toDataURL();
    var hash = 1234;
    for (var i = 0; i < src.length; i++) {
        var char = src.charCodeAt(i);
        c = src.charCodeAt(i);
        hash = ((hash << 5) - hash) + c;
    }

    document.getElementById('fingerprint').innerText = 'Seu fingerprint: ' + hash;
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('deviceDetails').addEventListener('click', function() {
        var deviceDetails = getDeviceDetails();
        document.getElementById('deviceInfo').innerText = 'Detalhes do dispositivo:\n' + JSON.stringify(deviceDetails, null, 2);
    });
    document.getElementById('hash').addEventListener('click', function() {
        var deviceDetails = getDeviceDetails();
        var deviceDetailsString = JSON.stringify(deviceDetails);
        var fingerprint = document.getElementById('fingerprint').innerText;
        var hashcompleto = CryptoJS.SHA256(fingerprint + deviceDetailsString).toString();
        document.getElementById('hashcompleto').innerText = 'Hash:\n' + hashcompleto;
    });
});


function getDeviceDetails() {
    var ua = navigator.userAgent;
    var deviceType = /Mobile|mini|iPad|Android/i.test(ua) ? 'Mobile' : 'Desktop';
    var browserName = getBrowserName();
    var browserVersion = getBrowserVersion();
    var os = "Unknown OS";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) os = "Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) os = "Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) os = "Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) os = "Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) os = "Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) os = "Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) os = "Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) os = "UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) os = "Linux";
    if (/Android/.test(ua)) os = "Android";
    if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";

    return {
        'userAgent': ua,
        'deviceType': deviceType,
        'browserName': browserName,
        'browserVersion': browserVersion,
        'operatingSystem': os
    };
}

function getBrowserName() {
    let userAgent = navigator.userAgent; 
    let browserName = "Unknown";

    // Detect browser
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Microsoft Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
    }

    return browserName;
}

function getBrowserVersion() {
    let userAgent = navigator.userAgent; 
    let browserVersion = "Unknown";

    // Detect version
    if (/Chrome/.test(userAgent)) {
        browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    } else if (/Safari/.test(userAgent)) {
        browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
    } else if (/Firefox/.test(userAgent)) {
        browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (/MSIE/.test(userAgent) || /Trident/.test(userAgent)) {
        browserVersion = userAgent.match(/rv:(\d+\.\d+)/)[1] || userAgent.match(/MSIE (\d+\.\d+)/)[1];
    } else if (/Edge/.test(userAgent)) {
        browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
    }

    return browserVersion;
}