import ymaps from 'ymaps'

const init = () => {

    let center = [59.759718,30.769347]

    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {

        const inputs = [...document.querySelectorAll('[data-suggest-view]')]

        inputs.forEach((input) => {

            new maps.SuggestView(input, {

                results: 5,
                container: document.body

            })

        })

        const map = new maps.Map('map', {

            center: center,
            zoom: 16

        })

        const placemark = new maps.Placemark(center, {}, {

            iconLayout: 'default#image',
            iconImageHref: '../img/geo.png',
            iconImageSize: [90, 90],
            iconImageOffset: [0, 0]

        })

        map.controls.remove('geolocationControl')
        map.controls.remove('searchControl')
        map.controls.remove('trafficControl')
        map.controls.remove('typeSelector')
        map.controls.remove('fullscreenControl')
        map.controls.remove('zoomControl')
        map.controls.remove('rulerControl')
        map.behaviors.disable(['scrollZoom'])
        map.geoObjects.add(placemark)

    }).catch(error =>

        console.log('Failed to load Yandex Maps', error)

    )

}

export default { init }