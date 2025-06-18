import React from "react";
import { Section } from "../components/Section";
import '@/assets/css/homeStyles.css';
export const Home = () => {
  return (
    <React.Fragment>
      <Section className="home-section">
        <h1>Bem-vindo ao Unipay</h1>
        <p>Esta é uma aplicação para gerenciamento da sua carteira digital.</p>
        <p>Utilize o menu lateral para navegar entre as diferentes seções.</p>
        <p>Para mais informações, consulte a documentação ou entre em contato com o suporte.</p>
        <img src="src\assets\img\robot.gif" alt="robozim" />
      </Section>
    </React.Fragment>

  );
};
