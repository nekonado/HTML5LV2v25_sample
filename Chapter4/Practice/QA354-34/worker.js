onmessage = function (event) {
    for (var i = 2; i < event.data; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
    postMessage("continue");
};
//素数か判断する関数
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}