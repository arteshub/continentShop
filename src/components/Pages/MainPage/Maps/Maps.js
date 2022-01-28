import React, {useState,useEffect} from 'react'
import {YMaps, Map, Placemark, FullscreenControl} from "react-yandex-maps";
import './Maps.css'





const Maps = () => {
        const mapData = {
            center: [42.868728, 74.557860],
            zoom: 14,
        };

        const [coordinates, setCoord] = useState([])


        const loadData = async () => {
            // await fetch
            setCoord([[42.868728, 74.557860]])
        }

        useEffect(() => {
            loadData()
        }, [])

        //  const [load,setLoad] = useState(useRef(false))
        //   console.log(load.current)
        //
        // useEffect(()=>{
        //     load.current=true;
        //     console.log(load.current)
        // })
        //
        //   const checkMaps = ()=>{
        //       if (load.current===false){
        //           return <Spinner/>
        //       } else {
        //           console.log(load.current)
        //       }
        //           }

        //
        // useEffect(()=>{
        //     load.loading.current=false
        //     console.log(load.loading.current)
        //
        //
        // },[load.loading.current])






        return (


            <div className={'maps__div'}>
                <YMaps >

                    <Map width='50%'
                         height='500px'
                         defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark options={{
                            iconLayout: 'default#image',
                            // iconImageHref: 'http://pngimg.com/uploads/red_arrow/red_arrow_PNG11.png',
                            // iconImageSize: [50, 60],

                        }} geometry={coordinate} />)}
                        <FullscreenControl options={{float:'left'}}/>



                    </Map>
                </YMaps>
            </div>
        )
    }





;

export default Maps;