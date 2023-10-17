import row1Array from './rows/row1';
import row2Array from './rows/row2';
import row3Array from './rows/row3';
import row4Array from './rows/row4';
import row5Array from './rows/row5';
import createRow from './createElements/createRow';

const rows = [
  row1Array,
  row2Array,
  row3Array,
  row4Array,
  row5Array,
];

const rowElements = createRow(rows);

export const [
  row1, row1Upper, row1Rus, row1RusUpper,
  row2, row2Upper, row2Rus, row2RusUpper,
  row3, row3Upper, row3Rus, row3RusUpper,
  row4, row4Upper, row4Rus, row4RusUpper,
  row5, row5Upper, row5Rus, row5RusUpper,
] = rowElements;
