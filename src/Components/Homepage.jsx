import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const MapComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDYsqots6JyZEtLW3SaYnOnq4ZnjSDVhy0&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: { lat: -1.409349, lng: -48.470439 }, // Coordenadas da Estação das Docas
            });

            const postos = [
                { lat: -1.455833, lng: -48.503889 }, // Estação das Docas
                { lat: -1.409349, lng: -48.470439 }, // Av. Dr. Freitas, 127 - Sacramenta
                { lat: -1.384839, lng: -48.463980 }, // Av. Centenário, 1052 - Val-de-Cães
                { lat: -1.353620, lng: -48.385899 }, // V. Passagem Santa Inês, 3 - Atalaia, Ananindeua
                { lat: -1.364612, lng: -48.374297 }, // BR 316, nº 4.500, Km 04 - Coqueiro, Ananindeua
            ];

            postos.forEach((location) => {
                new window.google.maps.Marker({
                    position: location,
                    map: map,
                });
            });
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '600px' }}></div>;
};

const Homepage = () => {
    const [userName, setUserName] = useState(''); // Estado para armazenar o nome do usuário
    const [services, setServices] = useState([]); // Estado para armazenar os serviços
    const [loadingServices, setLoadingServices] = useState(true); // Estado para carregamento dos serviços
    const [additionalData, setAdditionalData] = useState([]); // Estado para dados adicionais
    const [loadingAdditionalData, setLoadingAdditionalData] = useState(true); // Estado para carregamento dos dados adicionais

    const navigate = useNavigate();

    useEffect(() => {
        const savedUserName = localStorage.getItem('userName'); // Recupera o nome do usuário do localStorage
        if (savedUserName) {
            setUserName(savedUserName); // Define o estado com o nome do usuário
        }

        // Função para buscar serviços
        const fetchServices = async () => {
            try {
                const response = await fetch('https://api.exemplo.com/servicos');
                const data = await response.json();
                setServices(data);
                setLoadingServices(false);
            } catch (error) {
                console.error('Erro ao buscar os serviços:', error);
                setLoadingServices(false);
            }
        };

        // Função para buscar dados adicionais
        const fetchAdditionalData = async () => {
            try {
                const response = await fetch('https://api.exemplo.com/dados-adicionais');
                const data = await response.json();
                setAdditionalData(data);
                setLoadingAdditionalData(false);
            } catch (error) {
                console.error('Erro ao buscar dados adicionais:', error);
                setLoadingAdditionalData(false);
            }
        };

        fetchServices(); // Chama a função para buscar os serviços
        fetchAdditionalData(); // Chama a função para buscar dados adicionais
    }, []);

    const handleLoginClick = () => {
        navigate('/login'); // Navegar para a página de login
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Navegar para a página de registro
    };

    const handleLogout = () => {
        localStorage.removeItem('userName'); // Remove o nome do usuário do localStorage
        setUserName(''); // Limpa o estado do nome do usuário
    };

    return (
        <div id="wrapper">
            {/* Cabeçalho */}
            <header>
                <div className="logo">
                    <img src="src/assets/eco.png" alt="Logo" />
                </div>
                <div className="right-content">
                    <nav>
                        <ul>
                            <li><Link to="funcionalidade1" smooth={true} duration={1100}>Nossos serviços</Link></li>
                            <li><Link to="funcionalidade2" smooth={true} duration={1100}>Sobre nós</Link></li>
                            <li><Link to="funcionalidade3" smooth={true} duration={1100}>Suporte</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="auth-buttons">
                    {userName ? ( // Verifica se o usuário está logado
                        <>
                            <span className="welcome-message">Bem-vindo, {userName}!</span> 
                            <button className="logout-btn" onClick={handleLogout}>Sair</button> {/* Botão de logout */}
                        </>
                    ) : (
                        <>
                            <button className="login-btn" onClick={handleRegisterClick}>Registrar</button>
                            <button className="register-btn" onClick={handleLoginClick}>Entrar</button>
                        </>
                    )}
                </div>
            </header>

            {/* Frase de impacto */}
            <section className="impact-phrase">
                <h1>Descubra o futuro da mobilidade sustentável</h1>
                <p>Carregamento de carros elétricos com praticidade e inovação.</p>
                <Link to="funcionalidade1" className="cta-button" smooth={true} duration={1100}>Saiba mais</Link>
            </section>

            {/* Seção Nossos Serviços */}
            <section id="funcionalidade1" className="info-section">
                <div className="info-content">
                    <h2>Nossos Serviços</h2>
                    <p>
                        <strong>Reservas de Ponto de Carregamento:</strong> Nossa plataforma oferece um sistema de agendamento 
                        conveniente e flexível para carregamento de carros elétricos, proporcionando uma experiência tranquila 
                        para os usuários.
                    </p>
                    <ul>
                        <li>Velocidade de Recarga</li> 
                        <li>Avaliações e Feedback</li>
                        <li>Suporte</li>
                        <li>Mapa Interativo</li>
                    </ul>
                    <p>Os usuários também receberão notificações quando o posto de sua preferência estiver disponível.</p>
                </div>
            </section>

            {/* Título acima do Mapa */}
            <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#007bff' }}>Postos de Carregamento</h1>

            {/* Mapa abaixo de Nossos Serviços */}
            <MapComponent /> {/* Componente do mapa */}

            {/* Seção Dados Adicionais */}
            <section id="funcionalidade4" className="info-section">
                <div className="info-content">
                    <h2>Quer fazer um agendamento?</h2>
                    <p>Simplifique sua experiência de carregamento com nosso recurso de agendamento de recarga. Com essa funcionalidade, você pode planejar suas sessões de carregamento de forma prática e conveniente, garantindo que seu veículo elétrico esteja sempre pronto para rodar.</p>
                    <a href="agendamento" className="cta-button">Clique aqui</a>
                </div>
            </section>

            {/* Seção Sobre nós */}
            <section id="funcionalidade2" className="info-section">
                <div className="info-content">
                    <h2>Sobre nós</h2>
                    <p>
                        <strong>Uma revolução no modo como pensamos sobre carros:</strong> Nossa empresa é dedicada a fornecer 
                        soluções inovadoras e sustentáveis para o carregamento de carros elétricos. Estamos comprometidos em 
                        oferecer um sistema de agendamento conveniente, utilizando o mapa de Belém para localizar nossos postos 
                        de carregamento.
                    </p>
                </div>
            </section>

            {/* Seção Suporte ao Cliente */}
            <section id="funcionalidade3" className="info-section">
                <div className="info-content">
                    <h2>Suporte ao Cliente</h2>
                    <p>
                        Nosso compromisso vai muito além de apenas fornecer energia para seu veículo elétrico — ele está em garantir que cada interação com nossas estações seja fácil, confiável e sem preocupações.
                    </p>
                    <ul>
                        <li>Email: Ecochargebr@gmail.com</li>
                        <li>SAC: (91) 940028922</li>
                    </ul>
                    <a href="#funcionalidade3" className="cta-button">Chat Suporte</a>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
