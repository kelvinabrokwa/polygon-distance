var point = require('turf-point'),
    distance = require('turf-distance');

function polygonDistance(poly1, poly2) {
  var distance = Infinity;
  for (var i in poly1.coordinates) {
    for (var j in poly2.coordinate) {
      var pt1 = point(poly1.coordinates[i]),
          pt2 = point(poly2.coordinates[j]),
          dist = distance(pt1, pt2);
      if (dist < distance) {
        distance = dist;
      }
    }
  }
  return distance;
}

module.exports = polygonDistance;
