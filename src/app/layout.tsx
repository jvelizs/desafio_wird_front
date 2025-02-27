import StoreProvide from "@/store/StoreProvide";
import "./globals.css";

export const metadata = {
  title: "Mi Aplicación",
  description: "Descripción de mi aplicación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <StoreProvide>{children}</StoreProvide>
      </body>
    </html>
  );
}
