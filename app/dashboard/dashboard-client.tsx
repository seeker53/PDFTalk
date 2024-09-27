'use client';

import { UploadDropzone } from 'react-uploader';
import { Uploader } from 'uploader';
import { useRouter } from 'next/navigation';
import DocIcon from '@/components/ui/DocIcon';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

// Configuration for the uploader
const uploader = Uploader({
  apiKey: process.env.NEXT_PUBLIC_BYTESCALE_API_KEY || 'no api key found',
});

export default function DashboardClient({ docsList }: { docsList: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const options = {
    maxFileCount: 1,
    mimeTypes: ['application/pdf'],
    editor: { images: { crop: false } },
    styles: {
      colors: {
        primary: '#4F46E5', // Updated to a modern purple
        error: '#EF4444', // Tailwind's red for errors
      },
    },
    onValidate: async (file: File): Promise<undefined | string> => {
      return docsList.length > 3
        ? `You've reached your limit for PDFs.`
        : undefined;
    },
  };

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(files) => {
        if (files.length > 0) {
          setLoading(true);
          ingestPdf(
            files[0].fileUrl,
            files[0].originalFile?.originalFileName || files[0].filePath,
          );
        }
      }}
      width="470px"
      height="250px"
      className="rounded-md border-2 border-dashed border-gray-300 hover:border-gray-400 transition"
    />
  );

  async function ingestPdf(fileUrl: string, fileName: string) {
    const res = await fetch('/api/ingestPdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileUrl,
        fileName,
      }),
    });

    const data = await res.json();
    router.push(`/document/${data.id}`);
  }

  return (
    <div className="mx-auto flex flex-col gap-6 container mt-10">
      <h1 className="text-5xl font-semibold text-center text-gray-800">
        Chat With Your PDFs
      </h1>

      {docsList.length > 0 && (
        <div className="mx-auto my-5 w-full max-w-3xl">
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {docsList.map((doc: any) => (
              <div
                key={doc.id}
                className="flex justify-between items-center p-4 hover:bg-gray-50 transition sm:flex-row flex-col gap-3"
              >
                <button
                  onClick={() => router.push(`/document/${doc.id}`)}
                  className="flex items-center gap-4 text-gray-700 hover:text-gray-900"
                >
                  <DocIcon />
                  <span className="text-lg">{doc.fileName}</span>
                </button>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(doc.createdAt))} ago
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {docsList.length > 0 ? (
        <h2 className="text-3xl font-medium text-center text-gray-800">
          Or upload a new PDF
        </h2>
      ) : (
        <h2 className="text-3xl font-medium text-center text-gray-800 mt-5">
          No PDFs found. Upload a new PDF below!
        </h2>
      )}

      <div className="mx-auto w-full max-w-lg flex justify-center">
        {loading ? (
          <button
            type="button"
            className="inline-flex items-center mt-4 px-4 py-2 font-semibold leading-6 text-lg shadow-md rounded-md bg-gray-700 text-white cursor-not-allowed"
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Ingesting your PDF...
          </button>
        ) : (
          <UploadDropZone />
        )}
      </div>
    </div>
  );
}
