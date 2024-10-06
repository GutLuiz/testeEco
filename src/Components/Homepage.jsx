// Homepage.jsx
import React from 'react';
import './homepage.css'; // Certifique-se de que o caminho está correto

const Homepage = () => {
    return (
        
        <div id="wrapper">

            {/* Intro */}
            <section className="intro">
                <header>
                    {/* <img src={ecochargeLogo} alt="logo" />: */}
                    <p>Descubra o futuro da mobilidade sustentável</p>
                    <ul className="actions">
                        <li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
                    </ul>
                </header>
                <div className="content">
                    <span className="image fill" data-position="center">
                        {/* <img src={carroImage} alt="" /> */}
                    </span>
                </div>
            </section>

            <section id="first">
                <header>
                    <h2>Sobre nós</h2>
                </header>
                <div className="content">
                    <p>
                        <strong>Uma revolução no modo como pensamos sobre carros:</strong> Nossa empresa é dedicada a fornecer soluções inovadoras e sustentáveis para o carregamento de carros elétricos. Estamos comprometidos em oferecer um sistema de agendamento conveniente, utilizando o mapa de Belém para localizar nossos postos de carregamento.
                    </p>
                    {/* <span className="image main"><img src={postoS1Image} alt="" /></span> */}
                </div>
            </section>

            <section>
                <header>
                    <h2>Nossos Serviços</h2>
                </header>
                <div className="content">
                    <p>
                        <strong>Reservas de Ponto de Carregamento:</strong> Nossa plataforma oferece um sistema de agendamento conveniente e flexível para carregamento de carros elétricos, proporcionando uma experiência tranquila para os usuários.
                    </p>
                    <ul className="feature-icons">
                        <li className="icon solid fa-bolt">Velocidade de Recarga</li>
                        <li className="icon solid fa-signal">Avaliações e Feedback</li>
                        <li className="icon solid fa-cog">Suporte</li>
                        <li className="icon solid fa-map-marker-alt">Mapa Interativo</li>
                    </ul>
                    <p>Os usuários também receberão notificações quando o posto de sua preferência estiver disponível.</p>
                </div>
            </section>

            <section>
                <header>
                    <h2>Localização em Tempo Real</h2>
                </header>
                <div className="content">
                    <p>
                        Com a nossa tecnologia de localização em tempo real, você nunca mais ficará sem energia no seu veículo elétrico. Basta acessar o nosso site para visualizar os postos de carregamento disponíveis mais próximos de você, com informações atualizadas sobre disponibilidade de vagas e preços.
                    </p>
                    <section>
                        <header>
                            <h3>Ferramenta de Localização</h3>
                            <p>A ferramenta de localização garante que você encontre um posto de carregamento que atenda às suas necessidades de forma rápida e eficiente, seja para uma recarga rápida no caminho ou para planejar rotas mais longas. Além disso, você pode verificar a ocupação em tempo real antes de chegar ao local.</p>
                        </header>
                        <div className="content">
                            <div className="gallery">
                                {/* Aqui você pode adicionar imagens da galeria, se necessário */}
                            </div>
                        </div>
                    </section>

                    <section>
                        <header>
                            <h3>Sustentabilidade e Impacto Ambiental: Carregue Seu Veículo com Responsabilidade</h3>
                            <p>Aqui, nos preocupamos com o futuro do planeta. Além de facilitar o acesso à energia para veículos elétricos, estamos comprometidos em promover uma mobilidade sustentável que reduza drasticamente o impacto ambiental causado pelos transportes convencionais. Ao escolher nossas estações de carregamento, você está contribuindo diretamente para um futuro mais limpo e ecológico.</p>
                        </header>
                        <div className="content">
                            <div className="gallery">
                                <p><strong>Benefícios Ambientais de Carregar com a Gente:</strong></p>
                                <ul>
                                    <li><strong>Redução de Emissões de CO₂:</strong> Ao optar pelo uso de veículos elétricos, você ajuda a diminuir as emissões de gases poluentes que contribuem para o aquecimento global. Nossas estações fornecem eletricidade de fontes renováveis sempre que possível, aumentando ainda mais o impacto positivo.</li>
                                    <li><strong>Economia de Combustíveis Fósseis:</strong> Cada vez que você carrega o seu veículo elétrico em uma de nossas estações, está ajudando a reduzir a dependência de combustíveis fósseis, como gasolina e diesel, que são altamente poluentes.</li>
                                    <li><strong>Relatórios de Sustentabilidade:</strong> Oferecemos a você dados sobre o impacto positivo de suas escolhas. A cada sessão de carregamento, você poderá ver quantas emissões de CO₂ foram evitadas, ajudando a conscientizar e motivar para um uso contínuo e responsável.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                   

                </div>
            </section>

           

            
        </div>
    );
}

export default Homepage;
