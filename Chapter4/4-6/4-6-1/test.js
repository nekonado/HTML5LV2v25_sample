onmessage = function(event) {
let message = event.data;
//ここに処理を記述する
let result = "処理結果";
postMessage(result);
}