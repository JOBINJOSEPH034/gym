import styles from './CTA.module.css'

export default function CTA() {
    return (
        <section id="cta" className={styles.cta}>
            <h2 className={`section-title ${styles.title} reveal`}>READY TO<br />BEGIN?</h2>
            <p className={`section-body ${styles.body} reveal`} style={{ marginTop: '20px' }}>
                Your first week is on us. No contracts, no commitment — just results.
            </p>
            <a href="#pricing" className={`btn-white reveal ${styles.btn}`}>Claim Free Trial</a>
        </section>
    )
}
