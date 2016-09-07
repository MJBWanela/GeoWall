cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-network-information": "1.2.1",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-extension": "1.5.1",
    "cordova-plugin-admobpro": "2.19.1"
};
// BOTTOM OF METADATA
});