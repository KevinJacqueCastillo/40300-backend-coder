const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const dateNow = dayjs();

const miCumple = dayjs('13-02-98', 'DD-MM-YY')

console.log(miCumple.isValid())


console.log(dateNow.diff(miCumple,'days'));







