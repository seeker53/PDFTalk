import Header from '@/components/home/Header';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <div className="flex flex-col mx-auto justify-center items-center mt-10 p-5 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Create Your Account</h1>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary:
                'bg-black hover:bg-gray-700 transition text-sm normal-case py-2 px-4 rounded-md',
              input: 'border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500',
              // Optional: customize other elements as needed
            },
          }}
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
}
