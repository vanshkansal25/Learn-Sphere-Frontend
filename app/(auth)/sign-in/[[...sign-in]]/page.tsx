
"use client";

import React from "react";
import { LoginForm } from "@/components/login-form";
import Heading from "@/app/utils/Heading";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Heading
          title="Login - LearnSphere"
          description="Sign in to your LearnSphere account to access your courses and learning materials"
          keywords="login, sign in, learnsphere, e-learning"
        />
        <LoginForm />
      </div>
    </div>
  );
}

