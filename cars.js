const makers = ['mbw', 'ford', 'Mbenz', 'vw']

function car(maker) {
    // console.log('car')
    const mission = `${maker} make  cars`
    return mission
}

makers.map(car)

const message = makers.map(car)

console.log(message)