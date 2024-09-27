import DashboardClient from './dashboard-client';
import prisma from '@/utils/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { useState, useEffect } from 'react';

// Define your Document type with all required fields
interface Document {
  id: string;
  userId: string;
  fileUrl: string;
  fileName: string;
  createdAt: Date;
  // Include any additional properties here as needed
}

export default function Page() {
  const [docsList, setDocsList] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const user = await currentUser();
        if (user) {
          const docs = await prisma.document.findMany({
            where: {
              userId: user.id,
            },
            orderBy: {
              createdAt: 'desc',
            },
          });

          // Map fetched documents to match Document type
          const formattedDocs: Document[] = docs.map(doc => ({
            id: doc.id,
            userId: doc.userId,
            fileUrl: doc.fileUrl,
            fileName: doc.fileName,
            createdAt: doc.createdAt,
            // Include additional properties as needed
          }));

          setDocsList(formattedDocs);
        } else {
          setError('User not found');
        }
      } catch (err) {
        setError('Failed to fetch documents. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <DashboardClient docsList={docsList} />
    </div>
  );
}
