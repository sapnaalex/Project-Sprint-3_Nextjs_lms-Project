import connectToDatabase from '@/utils/mongodb';
import ClientLogger from '@/components/ClientLogger';
import './globals.css';

export const metadata = {
  title: 'LMS Project',
  description: 'Learning Management System',
};

export default async function RootLayout({ children }) {
  await connectToDatabase(); // server-side connection check

  return (
    <html lang="en">
      <body className="bg-gray-50">
        <ClientLogger /> {/* shows confirmation in browser console */}
        {children}
      </body>
    </html>
  );
}
