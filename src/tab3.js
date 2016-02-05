module.exports = function() {
  var tab = tabris.create('Tab', {
    title: 'My third Tab',
    image: {src: 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/tabfolder/images/card.png', scale: 2}
  })

/*
    var button = tabris.create("Button", {
      layoutData: {left: 10, top: 10, right: 10},
      text: "Take a picture"
    }).appendTo(tab).on("select", function() {
      navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        targetWidth: 1024,
        targetHeight: 1024,
        destinationType: window.Camera.DestinationType.FILE_URI
      });
      function onSuccess(imageUrl) {
        imageView.set("image", {src: imageUrl});
      }
      function onFail(message) {
        console.log("Camera failed because: " + message);
      }
    });
*/
var button = tabris.create("Button", {
  layoutData: {left: 10, top: 10, right: 10},
  text: "Take a picture"
}).appendTo(tab).on("select", function() {

  cordova.plugins.notification.local.schedule({
              id: 1,
              text: 'Scheduled every minute',
              every: 'minute',
              sound: sound,
              icon: 'res://icon',
              smallIcon: 'res://ic_popup_sync'
          });

    });


  return tab;
};
