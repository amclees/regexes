const macAddress = /^([0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}|[0-9a-fA-F]{2}:[0-9a-fA-F]{2}:[0-9a-fA-F]{2}:[0-9a-fA-F]{2}:[0-9a-fA-F]{2}:[0-9a-fA-F]{2})$/
const izeWord = /\w+i[sz](ed|ing|er|ation)/i
const snakeCase = /_{0,2}[a-z]([a-z]+[0-9]?_)*[a-z0-9]*/
const nameOfInstrument = /[0-z]+meter/
const aHref = /<a[^>]+href="([^"]*)"/
const versionNumber = /v?[0-9]+\.[0-9]+\.[0-9]+/
const led = /led/i
const regexHighlight = /^\/([^\/\\]|\\\/|\\\\)*\/[gmiyu]*/
const amperes = /[n\u03bcmMG]?A/

