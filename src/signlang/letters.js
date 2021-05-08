import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const aSign = new GestureDescription('A');

aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const bSign = new GestureDescription('B');

bSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
bSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);
bSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

bSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

bSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

bSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

bSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const cSign = new GestureDescription('C');

cSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

cSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

cSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

cSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);

export const dSign = new GestureDescription('D');

dSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

dSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

dSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
dSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

dSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
dSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

dSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
dSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const eSign = new GestureDescription('E');

eSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

eSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

eSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

eSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

eSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const fSign = new GestureDescription('F');

fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

fSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

fSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

fSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

fSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const gSign = new GestureDescription('G');

gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

gSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

gSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

gSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

export const hSign = new GestureDescription('H');

hSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

hSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

hSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
hSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

hSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

hSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
hSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

export const iSign = new GestureDescription('I');

iSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

iSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

iSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

iSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const jSign = new GestureDescription('J');

jSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

jSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

jSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

jSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

jSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
jSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

export const kSign = new GestureDescription('K');

kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

kSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

kSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const lSign = new GestureDescription('L');

lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

lSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

lSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

lSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const mSign = new GestureDescription('M');

mSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
mSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

mSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

mSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

mSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

mSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const nSign = new GestureDescription('N');

nSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

nSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

nSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

nSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

nSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

export const oSign = new GestureDescription('O');

oSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

oSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

oSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

oSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
oSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

oSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
oSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);

export const pSign = new GestureDescription('P');

pSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

pSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

pSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);

pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

pSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

export const qSign = new GestureDescription('Q');

qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.70);

qSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
qSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

qSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

qSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

qSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

export const rSign = new GestureDescription('R');

rSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

rSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

rSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const sSign = new GestureDescription('S');

sSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

sSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

sSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

sSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

sSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

export const tSign = new GestureDescription('T');

tSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
tSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

tSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

tSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

tSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

tSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

export const uSign = new GestureDescription('U');

uSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

uSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
uSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

uSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
uSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

export const vSign = new GestureDescription('V');

vSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

vSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

vSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

export const wSign = new GestureDescription('W');

wSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

wSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

wSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

wSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);

wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
wSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

export const xSign = new GestureDescription('X');

xSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

xSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

xSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

xSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export const ySign = new GestureDescription('Y');

ySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

ySign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

ySign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

ySign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

ySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
ySign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

export const zSign = new GestureDescription('Z');

zSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
zSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);

zSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
zSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

zSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
zSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

zSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
zSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

zSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
zSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);