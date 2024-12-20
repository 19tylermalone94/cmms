import './globals.css';

export const metadata = {
  title: 'CMMS',
  description: 'computerized maintenance management system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
