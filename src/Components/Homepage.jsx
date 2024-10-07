import React from 'react';
import './homepage.css'; // Certifique-se de que o caminho está correto

const Homepage = () => {
    return (
        <div id="wrapper">
            {/* Cabeçalho */}
            <header>
                <div className="logo">
                    <img src="sua-logo.png" alt="Logo" /> {/* Insira o caminho da logo */}
                </div>
                <div className="right-content">
                    <nav>
                        <ul>
                            <li><a href="#funcionalidade1">Nossos serviços</a></li>
                            <li><a href="#funcionalidade2">Sobre nós</a></li>
                            <li><a href="#funcionalidade3">Suporte</a></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <button className="login-btn">Registrar</button>
                        <button className="register-btn">Entrar</button>
                    </div>

                </div>
                
            </header>   
            
            {/* Frase de impacto */}
            <section className="impact-phrase">
                <p>Descubra o futuro da mobilidade sustentável</p>
            </section>
            
            <h1>Localização em tempo real</h1>
            <p>
                        Com a nossa tecnologia de localização em tempo real, você nunca mais ficará sem energia no seu veículo elétrico. Basta acessar o nosso site para visualizar os postos de carregamento disponíveis mais próximos de você, com informações atualizadas sobre disponibilidade de vagas e preços.
            </p>

            

        </div>
    );
}

export default Homepage;
