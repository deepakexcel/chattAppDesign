(function() {
    'use strict';

    angular.module('starter')

    .run(function($ionicPlatform, timeStorage, ajaxRequest, $state) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });


        document.addEventListener("deviceready", function() {
            console.log("device uuid: " + device.uuid);
            var push = PushNotification.init({
                "android": {
                    "senderID": "117380048302",
                    "icon": "chatt",
                    "iconColor": "grey"
                },
                "ios": {
                    "alert": "true",
                    "badge": "true",
                    "sound": "true"
                },
                "windows": {}
            });
            push.on('registration', function(data) {
                console.log(data);
                // var x = data.registrationId;
                // timeStorage.set("Noti_reg_id", x, 100);
                // var action = "add_mobile";
                // var params = 'device_id=' + encodeURIComponent(device.uuid) + '&user_key=' + '' + '&gcm_reg_id=' + encodeURIComponent(x);
                // // var api = 'mobile_api/api.php?action=' + action + '&' + params;
                // var api = 'mobile_api/api.php?action=' + action + '&' + params;
                // console.log(api);
                // var promise = ajaxRequest.send(api);
                // promise.then(function(data) {
                //     console.log(data);
                // });
            });
            push.on('notification', function(data) {
                if (undefined != data.additionalData.callback && 'function' == typeof window[data.additionalData.callback]) {
                    windowdata.additionalData.callback;
                }



                console.log(data);
                if (data.additionalData.foreground) {
                    //alert(data.message);
                    //             
                    
                    console.log(data);
                } else {
                    data.message,
                        data.title,
                        data.count,
                        data.sound,
                        data.image,
                        data.additionalData
                }
                window.callbackName = function() {
                    console.log("Notification");
                }
            });
            window.actions_left = function(data) {
                $state.go('app.chatpage');
            };
            push.on('error', function(e) {
                console.log("error");
                console.log(e.message);
                // e.message
            });

        });


    });

})();