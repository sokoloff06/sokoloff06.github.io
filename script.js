function runLongTask() {
    var startTime = Date.now()
    console.log('Start Long Task')
    array = new Array(100000000)
    for (let index = 0; index < array.length; index++) {
        array[index] = index
    }
    console.log(`Finish Long Task that took ${Date.now() - startTime}ms`)
}

function pushEvent(eventName) {
    dataLayer.push({ event: eventName })
}

function processSignIn(creds) {
    console.log('Processed Sign In: ' + creds.credential)
}

function makeSgtmCall() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }

    fetch(
        'https://gtm-pzqnwjr-m2vjm.uc.r.appspot.com/g/collect?v=2&tid=G-F9PE5LESJW&gtm=45je42q1v897374601z8852508559za220&_p=1709204106779&gcd=13l3l3l3l1&npa=0&dma=0&cid=1141082648.1693483972&ul=en-us&sr=3589x297&_fplc=0&ur=IL-TA&uaa=x86&uab=64&uafvl=Chromium%3B122.0.6261.69%7CNot%28A%253ABrand%3B24.0.0.0%7CGoogle%2520Chrome%3B122.0.6261.69&uamb=0&uam=&uap=macOS&uapv=14.3.1&uaw=0&are=1&pscdl=noapi&sst.uc=IL&sst.etld=google.co.il&sst.gcd=13l3l3l3l1&sst.tft=1709204106779&_s=1&sid=1709204106&sct=31&seg=1&dl=https%3A%2F%2Fadroit-agent-369208.ew.r.appspot.com%2Fproducts%2F&dr=https%3A%2F%2Fadroit-agent-369208.ew.r.appspot.com%2F&dt=Products%20%7C%20Demo%20E-commerce%20Store&en=page_view&ep.debug_mode=true&ep.anid=1234&tfd=921&richsstsse',
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error))
}
