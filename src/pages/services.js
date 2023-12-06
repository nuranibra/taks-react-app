import sty from './assets/service.module.css'

export default function Services () {
    return <>
        <h3 className={sty.text}>Services Page</h3>
        <div className={sty.box}>
            <div className={sty.child}>
                <h3 className={sty.title}>Title:Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
                <h4 className={sty.desc}><span className={sty.descText} style={{color:'red'}}>Description:</span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h4>
            </div>
            <div className={sty.child}>
                <h3 className={sty.title}>Title:Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
                <h4 className={sty.desc}><span className={sty.descText} style={{color:'red'}}>Description:</span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h4>
            </div>
            <div className={sty.child}>
                <h3 className={sty.title}>Title:Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
                <h4 className={sty.desc}><span className={sty.descText} style={{color:'red'}}>Description:</span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h4>
            </div>
        </div>
    </>
}