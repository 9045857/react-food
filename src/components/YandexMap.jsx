import { YMaps, Map } from "@pbe/react-yandex-maps";

export const YandexMap = () => (
    <YMaps>
        <div className='container map-container'>
            <h4 className="title-map">Testing map</h4>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
    </YMaps>
);
