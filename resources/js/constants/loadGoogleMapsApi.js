let googleMapsScriptIsInjected = false;

const injectGoogleMapsApiScript = (options = {}) => {
    if (googleMapsScriptIsInjected) {
        throw new Error('Google Maps Api is already loaded.');
    }

    const optionsQuery = Object.keys(options)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(options[k])}`)
    .join('&');

    const url = `https://maps.googleapis.com/maps/api/js?${optionsQuery}`;

    const script = document.createElement('script');

    script.setAttribute('src', url);
    script.setAttribute('async', '');
    script.setAttribute('defer', '');

    document.head.appendChild(script);

    googleMapsScriptIsInjected = true;
};

const lazyValue = (fn) => {
    let called = false;
    let returnValue;

    return () => {
        if (!called) {
            called = true;
            returnValue = fn();
        }

        return returnValue;
    };
};

const loadGoogleMapsApi = (apiKey, options = {}) => lazyValue(
    () => new Promise((resolve, reject) => {
        try {
            window.onGoogleMapsApiLoaded = resolve;

            injectGoogleMapsApiScript({
                key: apiKey,
                callback: 'onGoogleMapsApiLoaded',
                ...options,
            });
        } catch (error) {
            reject(error);
        }
    }).then(() => window.google.maps),
    );

export default loadGoogleMapsApi;