import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await currentUser(); // Get the current user

  // Redirect to dashboard if the user is logged in
  if (user) {
    redirect('/dashboard');
    return null; // Ensure to return null after redirect
  }

  return (
    <main className="sm:p-7 sm:pb-0">
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}
