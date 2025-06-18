import { Section } from "@/components/Section"
import '@/assets/css/sobre-style.css'

export const Sobre = () => {
    return(
        <Section>
            <div className="content">

                <div> 
            <h1>Sobre</h1>
            <p>Esse projeto visa desenvolver uma carteira digital, na qual os usuários possam transferir recursos entre si (Dinheiro fictício), algo semelhante ao Mercado Pago, PayPal ou PicPay. </p>
            </div>
            <img src="src\assets\img\robot.gif" alt="robozim" />

                </div>
            </Section>
    )
}