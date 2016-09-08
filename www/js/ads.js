
function publicidad() {



 var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) { // for android
        admobid = {
            banner: 'ca-app-pub-2513184903780332/9001044403',
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: 'ca-app-pub-2513184903780332/9001044403',
        };
    } else { // for windows phone
        admobid = {
            banner: 'ca-app-pub-2513184903780332/9001044403',
        };
    }


    // It will display smart banner at top center, using the default options
    if(AdMob) AdMob.createBanner( {
    adId: admobid.banner, 
    position: AdMob.AD_POSITION.TOP_CENTER, 
    autoShow: true } );

    // Prepare and load ad resource in background, e.g. at begining of game level
    if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );

    // Show the interstitial later, e.g. at end of game level
    if(AdMob) AdMob.showInterstitial();

}
document.addEventListener('deviceready', publicidad, false);