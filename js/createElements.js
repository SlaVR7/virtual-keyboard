class CreateKey {
  constructor() {}
  getHtml(key, clas) {
    return `<div class="key ${clas}">${key}</div>`;
  }
}

let tilda = new CreateKey(),
  one = new CreateKey(),
  two = new CreateKey(),
  three = new CreateKey(),
  four = new CreateKey(),
  five = new CreateKey(),
  six = new CreateKey(),
  seven = new CreateKey(),
  eight = new CreateKey(),
  nine = new CreateKey(),
  zero = new CreateKey(),
  minus = new CreateKey(),
  equally = new CreateKey(),
  backspace = new CreateKey();

let tab = new CreateKey(),
  Q = new CreateKey(),
  W = new CreateKey(),
  E = new CreateKey(),
  R = new CreateKey(),
  T = new CreateKey(),
  Y = new CreateKey(),
  U = new CreateKey(),
  I = new CreateKey(),
  O = new CreateKey(),
  P = new CreateKey(),
  bracketOpen = new CreateKey(),
  bracketClose = new CreateKey(),
  leftSlash = new CreateKey();

let caps = new CreateKey(),
  A = new CreateKey(),
  S = new CreateKey(),
  D = new CreateKey(),
  F = new CreateKey(),
  G = new CreateKey(),
  H = new CreateKey(),
  J = new CreateKey(),
  K = new CreateKey(),
  L = new CreateKey(),
  semicolon = new CreateKey(),
  quote = new CreateKey(),
  enter = new CreateKey();

let shift = new CreateKey(),
  Z = new CreateKey(),
  X = new CreateKey(),
  C = new CreateKey(),
  V = new CreateKey(),
  B = new CreateKey(),
  N = new CreateKey(),
  M = new CreateKey(),
  comma = new CreateKey(),
  point = new CreateKey(),
  rightSlash = new CreateKey(),
  up = new CreateKey(),
  rightShift = new CreateKey();

let ctrl = new CreateKey(),
  win = new CreateKey(),
  alt = new CreateKey(),
  space = new CreateKey(),
  rightAlt = new CreateKey(),
  left = new CreateKey(),
  down = new CreateKey(),
  right = new CreateKey(),
  rightCtrl = new CreateKey();


export const row1 = `<div class="row">${tilda.getHtml('~')}${one.getHtml('1')}${two.getHtml('2')}${three.getHtml('3')}${four.getHtml('4')}${five.getHtml('5')}${six.getHtml('6')}${seven.getHtml('7')}${eight.getHtml('8')}${nine.getHtml('9')}${zero.getHtml('0')}${minus.getHtml('-')}${equally.getHtml('=')}${backspace.getHtml('backspace', 'middleWidth')}</div>`;
export const row2 = `<div class="row">${tab.getHtml('tab', 'capsTabWidth')}${Q.getHtml('Q')}${W.getHtml('W')}${E.getHtml('E')}${R.getHtml('R')}${T.getHtml('T')}${Y.getHtml('Y')}${U.getHtml('U')}${I.getHtml('I')}${O.getHtml('O')}${P.getHtml('P')}${bracketOpen.getHtml('{')}${bracketClose.getHtml('}')}${leftSlash.getHtml('\\')}</div>`;
export const row3 = `<div class="row">${caps.getHtml('caps lock', 'capsTabWidth')}${A.getHtml('A')}${S.getHtml('S')}${D.getHtml('D')}${F.getHtml('F')}${G.getHtml('G')}${H.getHtml('H')}${J.getHtml('J')}${K.getHtml('K')}${L.getHtml('L')}${semicolon.getHtml(';')}${quote.getHtml('\'')}${enter.getHtml('enter', 'middleWidth')}</div>`;
export const row4 = `<div class="row">${shift.getHtml('shift', 'middleWidth')}${Z.getHtml('Z')}${X.getHtml('X')}${C.getHtml('C')}${V.getHtml('V')}${B.getHtml('B')}${N.getHtml('N')}${M.getHtml('M')}${comma.getHtml(',')}${point.getHtml('.')}${rightSlash.getHtml('/')}${up.getHtml('▲')}${rightShift.getHtml('shift', 'middleWidth')}</div>`;
export const row5 = `<div class="row">${ctrl.getHtml('ctrl')}${win.getHtml('win')}${alt.getHtml('alt')}${space.getHtml('space', 'space')}${rightAlt.getHtml('alt')}${left.getHtml('◄')}${down.getHtml('▼')}${right.getHtml('►')}${rightCtrl.getHtml('ctrl')}</div>`;




