//1
const mix = [1, 'string', true]
const second = mix[1]

console.log(second)

function callback() {
    console.log('test')
}
//2
const elements = [1, 2, 3]
const moreElements = [1, 2, 3, 4, 5]

elements.map(callback)
moreElements.map(callback)

function david() {
    return 'david'
}
//3
const newArray = elements.map(david)

console.log(newArray)

const colors = ['red', 'blue', 'green']

function isAColor(color) {
    const message = `${color} is a color`

    return message
}

const messages = colors.map(isAColor)

console.log(messages)