import './Contacts.css'
const Contacts = ({sortRef,contact})=>{
    return (
        <>
            <div  ref={sortRef}  className={contact===false?'contact__block':'contact__block active__contact'}>
                <h2 className={'contact__us'}>Связаться с нами</h2>
                <div className={'contact__infoblock'}>
                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/point-of-interest.png"/>
                    <h4> <span className={'span__bold'}>Адрес:</span>  г. Бишкек - ул. Интергельпо 1</h4>
                </div>
                <div className={'contact__infoblock'}>
                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/cell-phone.png"/>
                    <h4> <span className={'span__bold'}>Контактные телефоны:</span><br/> +996553351518 <br/> +996778654523 </h4>
                </div>
                <div className={'contact__infoblock'}>
                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/cloud-mail.png"/>
                    <h4> <span className={'span__bold'}>Почта:</span> <br/> artem.shubovich@continent.kg <br/> nikita@continent.kg</h4>
                </div>
                <div className={'contact__infoblock'}>
                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/about.png"/>
                    <h4> <span className={'span__bold'}>О нас:</span> <a href="http://shop.continent.kg">больше информации по ссылке</a></h4>
                </div>
            </div>
        </>
    )
}
export default Contacts
