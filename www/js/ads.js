(function() {
  'use strict';

  var admobData = {};

  // Determine platform
  if (/(android)/i.test(navigator.userAgent)) {
    admobData = {
        banner: 'ca-app-pub-2513184903780332~6047578008'
    };
  } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobData = {
        banner: 'ca-app-pub-2513184903780332~6047578008'
    };
  } else {
    admobData = {
        banner: 'ca-app-pub-2513184903780332~6047578008'
    };
  }


function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    adSize:'CUSTOM',  width:100%, height: distanciadLineas,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: true
  });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}