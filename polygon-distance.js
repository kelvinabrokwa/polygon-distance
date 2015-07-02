var point = require('turf-point'),
    distance = require('turf-distance');

/**
 * Find the shortest distance between two polygons
 *
 * @param {Object} poly1 geojson Polygon
 * @param {Object} poly2 geojson Polygon
 * @return {Number} shortest distance
 */
function polygonDistance(poly1, poly2) {
  var d = Infinity;
  for (var i in poly1.coordinates[0]) {
    for (var j in poly2.coordinates[0]) {
      var pt1 = point(poly1.coordinates[0][i]),
          pt2 = point(poly2.coordinates[0][j]),
          dist = distance(pt1, pt2);
      if (dist < d) {
        d = dist;
      }
    }
  }
  return d;
}

module.exports = polygonDistance;
