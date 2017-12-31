$('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});

function getLatestTweet() {
        
    $.get({
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
        method: 'GET',
        headers: {
            'Authorization': 'OAuth oauth_consumer_key="jRxI9kQqP81w8FwB8hIIcQCU2", oauth_nonce="QWwKca6I4dIQvs44LQDv50rud2ck84ib", oauth_signature="ropsLN1OEykAX5xn8Ke%2B0E2BWY0%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1514600343", oauth_token="892796855897161728-IemokYBuVrsGSaeJ7lksO6evy1TOCoI", oauth_version="1.0"'
        }
    })
    
}