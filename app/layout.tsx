export const metadata = {
  title: 'Nikhil Dhillon – Frontend Software Engineer',
  description: 'Personalised website built just for impact.com'
};

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
