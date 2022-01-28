import {React , useState} from 'react'
import ContentItems from "./Content_Items";
import SortPopUp from "./SortPopUp";
import './content__next__button.css'
import {useSelector} from "react-redux";

const sortItems = [{name: "Популярности", type : "popular"},{name: "Цене", type : "price"},{name: "Наличию", type : "inStock"}];

const Content = ({items,onClickItem})=>{

    const {sortBy} = useSelector(({filters})=>filters);



    const [active,setActive] = useState(null)


    const onItemClick = (index)=>{
        setActive(index);
        onClickItem(index);
    }


    const scrollTop = ()=>{
        window.scrollTo(500,500)
    }
    const isLoad = useSelector(({goods,filters})=>goods.isLoaded);


    return(
        <>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <div className="categories">
                            <ul>
                                <li className={active===null?'active':''} onClick={()=>onItemClick(null)}>Все</li>
                                {items.map((name,index)=>{
                                    return <li className={active===index?"active":''} onClick={()=>onItemClick(index)}  key={`${name} ${index}`}>{name}</li>
                                })}
                            </ul>
                        </div>
                        <SortPopUp onClickSortType  activeSortType={sortBy} items={sortItems}/>
                    </div>
                    <h2 className="content__title">{isLoad?"Наш ассортимент:":"Проверка наличия товара..."}</h2>
                    <ContentItems/>

                </div>

            </div>
            <div className={'pages__for__goods'}>

                <span onClickCapture={scrollTop}  className={'page__for__goods'}>Вернуться наверх...</span>


            </div>
        </>
    )
}
export default Content