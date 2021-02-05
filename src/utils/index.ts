export const timestampToDate = (timestamp: number) => new Date(timestamp * 1000)

export const cities = [
    { name: 'Kaikki kaupungit', id: [658225, 655195, 650225, 634964] },
    { name: 'Helsinki', id: [658225] },
    { name: 'Jyväskylä', id: [655195] },
    { name: 'Kuopio', id: [650225] },
    { name: 'Tampere', id: [634964] },
]

export const findCityWithId = (cityId: number) => {
    for (const city of cities) {
        if (city.id.length === 1 && city.id[0] === cityId) {
            return city.name
        }
    }
    return ''
}
