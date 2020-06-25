var ajaxRequest = new XMLHttpRequest();

ajaxRequest.open('GET', 'https://api.github.com/users/lucasbrandaodossantos');
ajaxRequest.send(null);

ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState === 4) {
        console.log(JSON.parse(ajaxRequest.responseText));
    }
}