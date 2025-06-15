import '@/assets/css/sectionStyles.css'

export const Section = ({ children }) => {
    return (
        <main>
            <section>
                {children}
            </section>
        </main>
    )
}