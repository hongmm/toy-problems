// There is a special square room with mirrors on each of the four walls.
// Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.
// The square room has walls of length p, and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.
// Return the number of the receptor that the ray meets first.  (It is guaranteed that the ray will meet a receptor eventually.)

// I: p and q (p is wall length)
// O: return first receptor hit
// C: 1 <= p <= 1000, 0 <= q <= p, start at southwest corner
// E: none? potentially a lot of bounces

var mirrorReflection = function(p, q) {
  // if  q === 0, return 0
  // if q === p, return 1
  // if 2q === p, return 2

  // stopping condition: one of the corners other than start is hit
  // 0: (p,0), 1: (p,p), 2: (0,p)
  // find endpoint of line traveled

  if (q === 0) {
    return 0;
  } else if (q === p) {
    return 1;
  } else if (2*q === p) {
    return 2;
  }

  var start = [0, 0]; // x and y
  var slope = p / q;
  var point0 = [p, 0];
  var point1 = [p, p];
  var point2 = [0, p];
  var getEndpoint = function(start, p, q) {
    // (endy - starty) / (endx - startx) === q/p
    // go until either 0 or p is hit for x or y axis
    debugger;
    // probably want to do it based on slope? check starting positions and judge? or previous slope
    var endX0 = (p / q) * (-1 *  start[1]) + start[0] // assume endY is 0
    var endY0 = (q / p) * (-1 * start[0]) + start [1] // assume endX is 0
    var endXp = (p / q) * (p - start[1]) + start[0] // assume endY is p
    var endYp = (q / p) * (p - start[0]) + start [1]  // assume endX is p

    var endX = endX0 >= 0 && endX0 <= p ? endX0 : endXp;
    var endY = endY0 >= 0 && endY0 <= p ? endY0 : endYp;

    if ((endX === p || endX === 0) && (endY === p || endY === 0)) {
      // if at a potential corner
      if (endX === 0 && endY === 0) {
        return 'error'
      }
      return [endX, endY];
    } else {
      getEndpoint([endX, endY], p, q)
    }
  }

  return getEndpoint(start, p, q);
};

console.log(mirrorReflection(3,1));
debugger;