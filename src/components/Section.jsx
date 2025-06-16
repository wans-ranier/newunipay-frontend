import '@/assets/css/sectionStyles.css'

export const Section = ({ children, className, props }) => {
    return (
        <section className={className} {...props}>
            {children}
        </section>
    )
}