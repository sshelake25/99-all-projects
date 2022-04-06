//defination of fn which retuning promise object

function sendApiCall(url, resolve, reject) {
    // send api call to get image from XmlHttpRquestObject 
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    // When the request loads, check whether it was successful
    request.onload = function () {

        if (request.status === 200) {

            // If successful, resolve the promise by passing back the request response
            resolve(request.response);
        } else {

            // If it fails, reject the promise with a error message
            reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
    };

    request.onerror = function () {
        // Also deal with the case when the entire request fails to begin with
        // This is probably a network error, so reject the promise with an appropriate message
        reject(Error('There was a network error.'));
    };

    // Send the request
    request.send();
};

function loadImages(imageUrl) {
    console.log(`Sending api call to image ${imageUrl}`);

    let myImageLoadPromise = new Promise((resolve, reject) => {
        // fetch imaeme remote api server;
        sendApiCall(imageUrl, resolve, reject);
    });

    return myImageLoadPromise;
}

function addImageToBody(imageResponse) {
  let body = document.querySelector('body');
  let myImage = document.createElement('img');

  let myImgUrl = URL.createObjectURL(imageResponse);

  myImage.src = myImgUrl;
  myImage.width = '500';
  myImage.height = '200';

  body.append(myImage);
}

loadImages('https://avatars.githubusercontent.com/u/6078720?s=500&v=4')
    .then(
        (sucess) => {
            addImageToBody(sucess);
        },
        (error) => {

        });