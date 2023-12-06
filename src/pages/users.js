import styles from './assets/users.module.css'

export default function Users () {
    return <>
        <h3 className={styles.text}>Users Contact</h3>
        <div>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    <h2>Name:</h2>
                    <h3>Leanne Graham</h3>
                </div>
                <div className={styles.emailBox}>
                    <h4>Email: Sincere@april.biz</h4>
                </div>
                <div className={styles.streetBox}>
                    <h4>Street: Kulas Light</h4>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    <h2>Name:</h2>
                    <h3>Leanne Graham</h3>
                </div>
                <div className={styles.emailBox}>
                    <h4>Email: Sincere@april.biz</h4>
                </div>
                <div className={styles.streetBox}>
                    <h4>Street: Kulas Light</h4>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    <h2>Name:</h2>
                    <h3>Leanne Graham</h3>
                </div>
                <div className={styles.emailBox}>
                    <h4>Email: Sincere@april.biz</h4>
                </div>
                <div className={styles.streetBox}>
                    <h4>Street: Kulas Light</h4>
                </div>
            </div>
        </div>
    </>
}