import Footer from '@/components/home/Footer';
import Header from '@/components/ui/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-md rounded-lg">
        {children}
      </main>
      <footer className="p-4 sm:p-6 lg:p-7 bg-gray-200 border-t border-gray-300 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
