var Point  = Isomer.Point;
var Path   = Isomer.Path;
var Shape  = Isomer.Shape;
var Vector = Isomer.Vector;
var Color  = Isomer.Color;

var iso = new Isomer(document.getElementById("canvas"));

var Shape = Isomer.Shape;
var Path = Isomer.Path;
var Point = Isomer.Point;
var Color = Isomer.Color;

// 'l'

    //horizontal
    
    iso.add(new Path([
  Point(-2, 6, 1),
  Point(-2, 2, 1),
  Point(-2, 2, 3),
  Point(-2, 4, 3)
]), new Color(50, 50, 50));

    // vertical
    iso.add(new Path([
  Point(0, 8, 5),
  Point(1, 7, 4),
  Point(0, 6, 1),
  Point(0, 8, -1)
]), new Color(0, 0, 0));


// 's'

    //lower square
    iso.add(new Path([
  Point(2, 0, 3),
  Point(3, 3, 2),
  Point(2, 2, 1),
  Point(2, 0, 1)
]), new Color(247));
    //upper square
    iso.add(new Path([
  Point(2, 2, 7),
  Point(-1, 1, 8),
  Point(0, 2, 5),
  Point(0, 0, 7)
]), new Color(239));
    //lower end triangle
    iso.add(new Path([
  Point(1, 1, 2),
  Point(0, 0, 1),
  Point(0, 2, 1)
]), new Color(170));
    // upper middle triangle
    iso.add(new Path([
  Point(1, 1, 6),
  Point(0, 0, 5),
  Point(0, 2, 5)
]), new Color(255));
    // bottom middle triangle
    iso.add(new Path([
  Point(2, 0, 1),
  Point(0, 0, 1),
  Point(0, 0, 3)
]), new Color(255));
    //upper end triangle
    iso.add(new Path([
  Point(2, 0, 7),
  Point(0, 0, 7),
  Point(0, 0, 9)
]), new Color(177));
