import keyboarPhoto from './../assets/images/1_org_zoom.webp'
import styProd from './assets/product.module.css'

export default function Product () {
    return <>
        <h3 className={styProd.text}>Product Page</h3>
        <div className={styProd.box}>
            <div className={styProd.childBox}>
                <span>Title: <strong>e-yooso</strong>Z-19 Mekanik Oyun Klavyesi 94 Tuş - Metal Gövde Huano Red Switch Buz Mavi Aydınlatma P27S1208</span>
                <span>Price:<spanv>1.215,93 TL</spanv></span>
                <div>
                    <img src={keyboarPhoto} alt='product_photo_img' className={styProd.images}/>
                </div>
            </div>
            <div className={styProd.childBox}>
            <span>Title: <strong>e-yooso</strong>Z-19 Mekanik Oyun Klavyesi 94 Tuş - Metal Gövde Huano Red Switch Buz Mavi Aydınlatma P27S1208</span>
                <span>Price:<spanv>1.215,93 TL</spanv></span>
                <div>
                    <img src={keyboarPhoto} alt='product_photo_img' className={styProd.images}/>
                </div>
            </div>
            <div className={styProd.childBox}>
            <span>Title: <strong>e-yooso</strong>Z-19 Mekanik Oyun Klavyesi 94 Tuş - Metal Gövde Huano Red Switch Buz Mavi Aydınlatma P27S1208</span>
                <span>Price:<spanv>1.215,93 TL</spanv></span>
                <div>
                    <img src={keyboarPhoto} alt='product_photo_img' className={styProd.images}/>
                </div>
            </div>
        </div>
    </>
}