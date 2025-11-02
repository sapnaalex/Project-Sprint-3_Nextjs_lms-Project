// /app/layout.js
import connectToDatabase from '../utils/mongodb';
import User from '../models/User';
import './globals.css';

export const metadata = {
  title: 'LMS Project',
  description: 'Learning Management System',
};

export default async function RootLayout({ children }) {
  await connectToDatabase();

  console.log('User model loaded successfully:', !!User);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
