"use client";

import React from "react";
import SignUpForm from "@/components/signUp-form";
import Heading from "@/app/utils/Heading";

export default function SignUpPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Heading
          title="Register - LearnSphere"
          description="Sign Up to your LearnSphere account to access your courses and learning materials"
          keywords="SignUp, Register, learnsphere, e-learning"
        />
        <SignUpForm />
      </div>
    </div>
  );
}
