function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);

      // Set AdMobAds options:
      admob.setOptions({
        publisherId:          "ca-app-pub-1817269486258695/6892783564",  // Required
        interstitialAdId:     "ca-app-pub-1817269486258695/6892783564",  // Optional        
      });

      // Ejecutamos la función de creación de publicidad de banner
      admob.createBannerView();

      // Ejecutamos la función de creación de publicidad de interstitial
      admob.requestInterstitial();
}

    document.addEventListener("deviceready", onDeviceReady, false);


/*
function onDeviceready(){
    admob.createBannerView({publisherId: 'ca-app-pub-1817269486258695/6892783564'});
}

document.addEventListener('deviceready',onDeviceready, false);


(function() {
  'use strict';

  var admobData = {};

  // Determine platform
  if (/(android)/i.test(navigator.userAgent)) {
    admobData = {
        banner: 'ca-app-pub-1817269486258695/6892783564'
    };
  } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobData = {
      banner: 'ca-app-pub-2513184903780332/9001044403',                    
    };
  } else {
    admobData = {
        banner: 'ca-app-pub-2513184903780332/9001044403',                    
    };
  }

  function setBanner() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobData.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
  }

  document.addEventListener('deviceready', setBanner, false);
}());










//initialize the goodies 
function initApp(){
        if ( window.plugins && window.plugins.AdMob ) {
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-2513184903780332/9001044403',                    
                },
                android : {
                    banner: 'ca-app-pub-2513184903780332/9001044403',                    
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
 
            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,  //use SMART_BANNER, BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD 
                bannerAtTop: false, // set to true, to put banner at top 
                overlap: true, // banner will overlap webview 
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap                 
                autoShow: true // auto show interstitial ad when loaded 
            });
 
            registerAdEvents();
        } else {
            //alert( 'admob plugin not ready' ); 
        }
}
//functions to allow you to know when ads are shown, etc. 
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){ });
    }
 


//display the banner 
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
}
//display the interstitial 
function showInterstitialFunc(){
    window.plugins.AdMob.createInterstitialView();  //get the interstitials ready to be shown and show when it's loaded. 
    window.plugins.AdMob.requestInterstitialAd();
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

*/