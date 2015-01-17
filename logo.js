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
  Point(-2, 6, 3),
  Point(-2, 2, 3),
  Point(-2, 2, 1),
  Point(-2, 6, 1)
]), new Color(240, 10,10));

    // vertical
    iso.add(new Path([
  Point(0, 8, 5),
  Point(1, 7, 4),
  Point(0, 6, -1),
  Point(0, 8, -1)
]), new Color(100, 80, 90));


// 's'

    //lower square
    iso.add(new Path([
  Point(2, 2, 3),
  Point(3, 1, 2),
  Point(2, 0, 1),
  Point(2, 2, 1)
]), new Color(130, 10,10));
    //upper square
    iso.add(new Path([
  Point(0, 2, 7),
  Point(1, 1, 8),
  Point(0, 0, 5),
  Point(0, 2, 5)
]), new Color(200, 200));
    //lower end triangle
    iso.add(new Path([
  Point(1, 1, 2),
  Point(0, 0, 1),
  Point(0, 2, 1)
]), new Color(5, 155, 60));
    // upper middle triangle
    iso.add(new Path([
  Point(1, 1, 6),
  Point(0, 0, 5),
  Point(0, 2, 5)
]), new Color(20, 220, 255));
    // bottom middle triangle
    iso.add(new Path([
  Point(2, 0, 1),
  Point(0, 0, 1),
  Point(0, 0, 3)
]), new Color(200, 200, 120));
    //upper end triangle
    iso.add(new Path([
  Point(2, 0, 7),
  Point(0, 0, 7),
  Point(0, 0, 9)
]), new Color(200, 200, 200));


