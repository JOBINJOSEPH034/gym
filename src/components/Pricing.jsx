import styles from './Pricing.module.css'

const plans = [
    {
        tag: 'Basic',
        name: 'STARTER',
        price: '1499',
        features: ['Gym Floor Access', 'Locker Room', '2 Group Classes / Week', 'App Access'],
        featured: false,
    },
    {
        tag: 'Most Popular',
        name: 'ELITE',
        price: '2999',
        features: ['Unlimited Access', 'All Group Classes', '1 PT Session / Month', 'Nutrition Consultation', 'Guest Pass (1/month)'],
        featured: true,
    },
    {
        tag: 'Premium',
        name: 'FORGE',
        price: '4999',
        features: ['Everything in Elite', '4 PT Sessions / Month', 'Custom Program', 'Recovery Suite Access', 'Priority Booking'],
        featured: false,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className={styles.pricing}>
            <div className="reveal" style={{ textAlign: 'center' }}>
                <p className="section-label">Investment</p>
                <h2 className="section-title">SIMPLE<br />PRICING</h2>
            </div>
            <div className={styles.grid}>
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`${styles.card} ${plan.featured ? styles.featured : ''} reveal`}
                    >
                        <p className={styles.tag}>{plan.tag}</p>
                        <h3 className={styles.name}>{plan.name}</h3>
                        <div className={styles.amount}><sup>₹</sup>{plan.price}</div>
                        <p className={styles.period}>per month</p>
                        <ul className={styles.features}>
                            {plan.features.map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                        <a href="#cta" className={styles.btnPlan}>Get Started</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
