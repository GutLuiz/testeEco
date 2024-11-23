import React, { useState, useEffect } from "react";
import "./Agendamento.css";

// Importe as imagens diretamente
import estacaoDasDocas from "./pics/estacao_das_docas.jpg";
import avDrFreitas from "./pics/av_dr_freitas.jpg";
import avCentenario from "./pics/av_centenario.jpg";
import passagemSantaInes from "./pics/passagem_santa_ines.jpg";
import br316 from "./pics/br_316.jpg";

const Agendamento = () => {
  const [postoSelecionado, setPostoSelecionado] = useState(null);

  const postos = [
    {
      lat: -1.455833,
      lng: -48.503889,
      nome: "Estação das Docas",
      endereco: "Av. Boulevard Castilho França, Belém - PA",
      horario: "Aberto. Fecha às 23:00 Hrs",
      status: "Disponível",
      imagem: estacaoDasDocas,
    },
    {
      lat: -1.409349,
      lng: -48.470439,
      nome: "Av. Dr. Freitas",
      endereco: "Av. Dr. Freitas, 127 - Sacramenta",
      horario: "Aberto. Fecha às 22:00 Hrs",
      status: "Em uso",
      imagem: avDrFreitas,
    },
    {
      lat: -1.384839,
      lng: -48.46398,
      nome: "Av. Centenário",
      endereco: "Av. Centenário, 1052 - Val-de-Cães",
      horario: "Aberto. Fecha às 20:00 Hrs",
      status: "Disponível",
      imagem: avCentenario,
    },
    {
      lat: -1.35362,
      lng: -48.385899,
      nome: "Passagem Santa Inês",
      endereco: "V. Passagem Santa Inês, 3 - Atalaia, Ananindeua",
      horario: "Aberto. Fecha às 21:00 Hrs",
      status: "Ocupado",
      imagem: passagemSantaInes,
    },
    {
      lat: -1.364612,
      lng: -48.374297,
      nome: "BR 316",
      endereco: "BR 316, nº 4.500, Km 04 - Coqueiro, Ananindeua",
      horario: "Aberto. Fecha às 22:00 Hrs",
      status: "Disponível",
      imagem: br316,
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDYsqots6JyZEtLW3SaYnOnq4ZnjSDVhy0&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: -1.409349, lng: -48.470439 },
      });

      postos.forEach((posto) => {
        const marker = new window.google.maps.Marker({
          position: { lat: posto.lat, lng: posto.lng },
          map: map,
        });

        marker.addListener("click", () => {
          setPostoSelecionado(posto);
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="agendamento-container">
      <div className="agendamento-info">
        {postoSelecionado ? (
          <>
            <img
              src={postoSelecionado.imagem}
              alt={`Imagem de ${postoSelecionado.nome}`}
              className="agendamento-imagem"
            />
            <h2 className="agendamento-titulo">{postoSelecionado.nome}</h2>
            <p className="agendamento-detalhe">
              <span role="img" aria-label="localização">
                <svg
                  width="24"
                  height="24"
                  fill="green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 6.627 7 13 7 13s7-6.373 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>{" "}
              {postoSelecionado.endereco}
            </p>
            <p className="agendamento-status">
              <span className="agendamento-icone">
                <svg
                  width="24"
                  height="24"
                  fill="green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm6-11h-1V2h-2v1H9V2H7v1H6c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 15c0 .552-.449 1-1 1H6c-.552 0-1-.448-1-1V9h14v9z" />
                </svg>
              </span>{" "}
              {postoSelecionado.horario}
            </p>
            <p className="agendamento-status">
              <span className="agendamento-icone">
                <svg
                  width="24"
                  height="24"
                  fill="green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                </svg>
              </span>{" "}
              Status de uso: {postoSelecionado.status}
            </p>
          </>
        ) : (
          <p>Selecione um posto no mapa para ver detalhes.</p>
        )}
        <h3 className="agendamento-subtitulo">FAÇA SEU AGENDAMENTO AQUI!</h3>
        <a href="Scheduling">
           <button className="agendamento-botao">Agendar</button>
        </a>
      </div>
      <div className="agendamento-mapa">
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </div>
    </div>
  );
};

export default Agendamento;
