'use client'
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Health Diary</h1>
          <p className="text-slate-600">Create an account to start tracking</p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}