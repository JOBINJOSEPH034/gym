import styles from './Schedule.module.css'

const classes = [
    { name: 'Power Lift', day: 'Monday', time: '6:00 AM', coach: 'Marcus Reid', duration: '60 min', status: 'OPEN' },
    { name: 'HIIT Burn', day: 'Tuesday', time: '7:00 AM', coach: 'Sofia Cruz', duration: '45 min', status: 'OPEN' },
    { name: 'Combat Fit', day: 'Tuesday', time: '6:00 PM', coach: 'Darius Ko', duration: '60 min', status: 'FULL' },
    { name: 'Speed & Agility', day: 'Wednesday', time: '5:30 AM', coach: 'Aria Patel', duration: '45 min', status: 'OPEN' },
    { name: 'MetCon', day: 'Thursday', time: '12:00 PM', coach: 'Sofia Cruz', duration: '45 min', status: 'OPEN' },
    { name: 'Strength Express', day: 'Friday', time: '6:00 AM', coach: 'Marcus Reid', duration: '45 min', status: 'OPEN' },
    { name: 'Weekend Warrior', day: 'Saturday', time: '9:00 AM', coach: 'All Coaches', duration: '90 min', status: 'FULL' },
]

export default function Schedule() {
    return (
        <section id="schedule" className={styles.schedule}>
            <div className="reveal">
                <p className="section-label">This Week</p>
                <h2 className="section-title">CLASS<br />SCHEDULE</h2>
            </div>
            <table className={`${styles.table} reveal`}>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Coach</th>
                        <th>Duration</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((c, i) => (
                        <tr key={i}>
                            <td className={styles.className}>{c.name}</td>
                            <td>{c.day}</td>
                            <td>{c.time}</td>
                            <td>{c.coach}</td>
                            <td>{c.duration}</td>
                            <td>
                                <span className={`${styles.badge} ${c.status === 'FULL' ? styles.badgeFull : ''}`}>
                                    {c.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
