const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')

const now = dayjs()

dayjs.extend(customParseFormat)

const miBirth = dayjs('13-02-98', 'DD-MM-YY');

console.log(miBirth.isValid())
console.log(now.isValid())

console.log(now.format('DD-MM-YYYY, HH:mm'))
console.log(miBirth.format('DD-MM-YYYY, HH:mm'))


console.log(now.diff(miBirth,'days'))


