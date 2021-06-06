function* dateGenerator(dateStr: string, oldDateFormat: string): IterableIterator<any> {
  const formatString = oldDateFormat + '/';
  const dateChar = 'ymd';
  let index = 0;
  let startIndex = 0;
  while (index < formatString.length + 1) {
    if (dateChar.indexOf(formatString.charAt(index)) === -1) {
      const dateValue = { key: '', value: '' };
      dateValue.key = formatString.substring(startIndex, index);
      dateValue.value = dateStr.substring(startIndex, index);
      yield dateValue;
      startIndex = index + 1;
    }
    index += 1;
  }
}

type ValueInIterator = {
  key: string;
  value: string;
};

const changeDateFormat: any = (dateStr: string, oldFormat: string, newFormat: string) => {
  const generator = dateGenerator(dateStr, oldFormat);
  let convertedDate = newFormat;
  let iterator = generator.next();
  while (!iterator.done) {
    const valueInIterator: ValueInIterator = iterator.value as ValueInIterator;
    convertedDate = convertedDate.replace(valueInIterator.key, valueInIterator.value);
    iterator = generator.next();
  }
  return convertedDate;
};

export default changeDateFormat;
