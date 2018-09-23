/* centralised ajax call */

function makeCall(url, sessionToken, responseType) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.responseType = "json";
    if (responseType) {
      req.responseType = responseType;
    }
    req.onload = () => {
      if (req.status === 200) {
        if (typeof req.response === "string") {
          // IE
          resolve(JSON.parse(req.response));
        } else {
          resolve(req.response);
        }
      } else {
        reject(req.status);
      }
    };
    req.onerror = () => reject(Error("network error"));
    req.send();
  });
}

export default makeCall;
