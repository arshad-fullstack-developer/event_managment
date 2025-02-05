window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */





// If you're using Axios for making requests and need to send the CSRF token header explicitly

window.axios = require('axios');

// Get the token from the meta tag
const sanctumToken = document.querySelector('meta[name="sanctum_token"]').getAttribute('content');

// If the token exists, set it in the Authorization header
if (sanctumToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${sanctumToken}`;
}

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = `Bearer ${sanctumToken}`;
axios.defaults.withCredentials = true; 
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });


