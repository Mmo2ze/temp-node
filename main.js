const os = require('os')
const path = require('path')
const fs = require('fs')
const http = require('http')
const lodash = require('lodash')
let arr  = [1,[2],[2,5,2,[2,3,4],76]]
arr = lodash.flattenDeep(arr)
console.log(arr)
