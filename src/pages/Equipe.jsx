import { Section } from "@/components/Section"
import '@/assets/css/equipeStyles.css'
import Yoda from '@/assets/img/yoda.png'
import Chubaka from '@/assets/img/chubaka.jpg'
import Griveous from '@/assets/img/griveous.png'
import K2so from '@/assets/img/k2so.png'

export const Equipe = () => {
  return (
    <Section>
      <div className="equipe-header">
        <h1>Equipe</h1>
        <h2>Desenvolvedores da Equipe</h2>
      </div>
      <div className="equipe-container">
        <div className="equipe-card">
          <div className="equipe-card-image">
            <img src={Chubaka} alt="Chubaka" />
          </div>
          <h4>Wans Ranier</h4>
        </div>
        <div className="equipe-card">
          <div className="equipe-card-image">
            <img src={Griveous} alt="" />
          </div>
          <h4>Reinaldo Porfírio</h4>
        </div>
        <div className="equipe-card">
          <div className="equipe-card-image">
            <img src={K2so} alt="" />
          </div>
          <h4>Lucas Repinaldo</h4>
        </div>
        <div className="equipe-card">
          <div className="equipe-card-image">
            <img src={Yoda} alt="" />
          </div>
          <h4>Saullo Rodrigues</h4>
        </div>
      </div>
    </Section>
  )
}