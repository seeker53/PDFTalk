import prisma from '@/utils/prisma';
import { currentUser } from '@clerk/nextjs/server';
import DocumentClient from './document-client';

export default async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();

  // Check if user is authenticated
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Access Denied</h2>
          <p>Please log in to access your documents.</p>
        </div>
      </div>
    );
  }

  let currentDoc;

  try {
    currentDoc = await prisma.document.findFirst({
      where: {
        id: params.id,
        userId: user.id,
      },
    });
  } catch (error) {
    console.error('Error fetching document:', error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Error Fetching Document</h2>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  // Handle case where document is not found
  if (!currentDoc) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Document Not Found</h2>
          <p>This document was not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <DocumentClient currentDoc={currentDoc} userImage={user.imageUrl} />
    </div>
  );
}
