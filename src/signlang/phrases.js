import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const helloSign = new GestureDescription('Hello');

helloSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
helloSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

helloSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

helloSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

helloSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

helloSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const nameSign = new GestureDescription('Name');

nameSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nameSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

nameSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
nameSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

nameSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
nameSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

nameSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nameSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

nameSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nameSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);