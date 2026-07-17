function initMainMap() {
  var uluru = {
    lat: 55.7355391,
    lng: 37.5924784
  };
  var mainMap = new google.maps.Map(document.getElementById("mainMap"), {
    zoom: 17,
    center: uluru,
    disableDefaultUI: !0
  });
  var marker = new google.maps.Marker({position: uluru, map: mainMap, icon: "https://zamok.pro/wp-content/themes/green-site/img/pin_current.png"});
}
function initMap() {
  var a = Array.prototype.slice.call(document.querySelectorAll(".office__data"));
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {
      lat: 55.73946,
      lng: 37.6541889
    },
    disableDefaultUI: !0
  }), a.forEach(function (b, c) {
    if (b.dataset.latlng) {
      var d = _slicedToArray(b.dataset.latlng.split(","), 2),
          a = d[0],
          e = d[1];

      offices[c] = {
        position: {
          lat: 0,
          lng: 0
        },
        slickIndex: "",
        region: ""
      }, offices[c].position = {
        lat: parseFloat(a),
        lng: parseFloat(e)
      }, offices[c].slickIndex = b.dataset.slickIndex, offices[c].region = b.dataset.region;
    }
  }), offices.forEach(function (a, b) {
    markers[b] = {
      marker: "",
      region: "",
      position: ""
    }, markers[b].marker = new google.maps.Marker({
      position: a.position,
      map: map,
      icon: "https://zamok.pro/wp-content/themes/green-site/img/pin.png"
    }), markers[b].region = a.region, markers[b].position = a.position, markers[b].marker.addListener("click", function () {
      var a = _toConsumableArray(document.querySelectorAll(".office__data")),
          c = "".concat(markers[b].position.lat, ",").concat(markers[b].position.lng),
          d = document.querySelector(".office__data[data-latlng=\"".concat(c, "\"]"));

      jQuery(".offices__wrap").slick("slickGoTo", a.indexOf(d));
    });
  });
  var b = markers.map(function (a) {
    return a.marker;
  });
  markerCluster = new MarkerClusterer(map, b, {
    gridSize: 15,
    styles: [{
      url: "https://zamok.pro/wp-content/themes/green-site/img/clusters/m2.png",
      textColor: "white",
      height: 40,
      width: 40
    }]
  }), updateCenterMap();
}