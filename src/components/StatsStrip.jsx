import styles from './StatsStrip.module.css'

const stats = [
    '12,000+ Members',
    '150+ Weekly Classes',
    '30 Elite Trainers',
    'Kerala, India',
    '15 Years Strong',
    'Open 24/7',
]

export default function StatsStrip() {
    // Duplicate for seamless loop
    const items = [...stats, ...stats]
    return (
        <div className={styles.strip}>
            <div className={styles.inner}>
                {items.map((s, i) => (
                    <span key={i} className={styles.item}>{s}</span>
                ))}
            </div>
        </div>
    )
}
