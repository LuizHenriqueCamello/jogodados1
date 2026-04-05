export default function Dado({ valor }) {
  const estilosContainer = {
    width: "80px",
    height: "80px",
    border: "2px solid black",
    borderRadius: "10px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    padding: "5px"
  };

  const ponto = {
    width: "10px",
    height: "10px",
    backgroundColor: "black",
    borderRadius: "50%",
    justifySelf: "center",
    alignSelf: "center"
  };

  function renderPontos() {
    switch (valor) {
      case 1:
        return [
          <div key="p1" style={{ ...ponto, gridColumn: 2, gridRow: 2 }} />
        ];

      case 2:
        return [
          <div key="p1" style={{ ...ponto, gridColumn: 1, gridRow: 2 }} />,
          <div key="p2" style={{ ...ponto, gridColumn: 3, gridRow: 2 }} />
        ];

      case 3:
        return [
          <div key="p1" style={{ ...ponto, gridColumn: 1, gridRow: 1 }} />,
          <div key="p2" style={{ ...ponto, gridColumn: 2, gridRow: 2 }} />,
          <div key="p3" style={{ ...ponto, gridColumn: 3, gridRow: 3 }} />
        ];

      case 4:
        return [
          <div key="p1" style={{ ...ponto, gridColumn: 1, gridRow: 1 }} />,
          <div key="p2" style={{ ...ponto, gridColumn: 3, gridRow: 1 }} />,
          <div key="p3" style={{ ...ponto, gridColumn: 1, gridRow: 3 }} />,
          <div key="p4" style={{ ...ponto, gridColumn: 3, gridRow: 3 }} />
        ];

      case 5:
        return [
          <div key="p1" style={{ ...ponto, gridColumn: 1, gridRow: 1 }} />,
          <div key="p2" style={{ ...ponto, gridColumn: 3, gridRow: 1 }} />,
          <div key="p3" style={{ ...ponto, gridColumn: 2, gridRow: 2 }} />,
          <div key="p4" style={{ ...ponto, gridColumn: 1, gridRow: 3 }} />,
          <div key="p5" style={{ ...ponto, gridColumn: 3, gridRow: 3 }} />
        ];

      case 6:
        return [
          <div key="p1" style={{ ...ponto, gridColumn: 1, gridRow: 1 }} />,
          <div key="p2" style={{ ...ponto, gridColumn: 1, gridRow: 2 }} />,
          <div key="p3" style={{ ...ponto, gridColumn: 1, gridRow: 3 }} />,
          <div key="p4" style={{ ...ponto, gridColumn: 3, gridRow: 1 }} />,
          <div key="p5" style={{ ...ponto, gridColumn: 3, gridRow: 2 }} />,
          <div key="p6" style={{ ...ponto, gridColumn: 3, gridRow: 3 }} />
        ];

      default:
        return null;
    }
  }

  return <div style={estilosContainer}>{renderPontos()}</div>;
}