export const metadata = {
  title: "Jogo de Dados",
  description: "Jogo de dados com 2 jogadores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}