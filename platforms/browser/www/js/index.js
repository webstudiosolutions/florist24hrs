var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
         document.addEventListener("deviceready", this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        if (navigator.connection.type == Connection.NONE) {
              navigator.notification.alert('An internet connection is required to continue');
            } else {
              window.location="http://www.myapp.com";
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
        
    }
};
 
