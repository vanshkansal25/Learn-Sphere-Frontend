// app/(auth)/verification/page.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useActivateUserMutation } from '@/redux/api/authApi';

export default function VerificationPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    const [activateUser, { isLoading }] = useActivateUserMutation();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [errorMessage, setErrorMessage] = useState('');
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Proper ref callback function that returns void
    const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
        inputRefs.current[index] = el;
    };

    const handleChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setErrorMessage(''); // Clear error when user types

            // Auto-focus next input
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }

            // Auto-submit when all digits are entered
            if (newOtp.every(digit => digit !== '') && index === 3) {
                handleSubmit(newOtp.join(''));
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (otpValue?: string) => {
        const finalOtp = otpValue || otp.join('');

        if (finalOtp.length !== 4) {
            setErrorMessage('Please enter all 4 digits');
            return;
        }

        if (!email) {
            setErrorMessage('Email not found. Please register again.');
            return;
        }

        try {
            await activateUser({ email, activationCode: finalOtp }).unwrap();
            router.push('/login?message=Account activated successfully');
        } catch (err: any) {
            if (err.data && err.data.message) {
                setErrorMessage(err.data.message);
            } else {
                setErrorMessage('Activation failed. Please try again.');
            }
            console.error('Activation failed:', err);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    // Focus first input on mount
    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    // Redirect if no email
    useEffect(() => {
        if (!email) {
            router.push('/sign-up');
        }
    }, [email, router]);

    if (!email) {
        return (
            //   <div className="min-h-screen flex items-center justify-center align-center bg-gray-50">
            //     <Card className="w-full max-w-md">
            //       <CardContent className="pt-6">
            //         <p className="text-center text-gray-600">Redirecting to registration...</p>
            //       </CardContent>
            //     </Card>
            //   </div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-purple-100 p-4">
                <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                        <div className="text-center space-y-6">
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="w-16 h-16 border-4 border-violet-200 rounded-full animate-spin border-t-violet-600"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-violet-700 to-violet-600 bg-clip-text text-transparent">
                                    Almost There!
                                </h2>
                                <p className="text-gray-600 text-lg font-medium">
                                    Redirecting to registration...
                                </p>
                                <p className="text-sm text-gray-500">
                                    Please wait while we prepare your registration form
                                </p>
                            </div>
                            <div className="pt-4">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-violet-700 to-violet-600 h-2 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-2 pt-4">
                                {[1, 2, 3].map((dot) => (
                                    <div
                                        key={dot}
                                        className="w-2 h-2 bg-violet-500 rounded-full animate-bounce"
                                        style={{ animationDelay: `${dot * 0.2}s` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Verify Your Account</CardTitle>
                    <CardDescription className="text-center">
                        Enter the 4-digit code sent to <span className="font-medium text-violet-700">{email}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {errorMessage && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-sm text-red-600 text-center">
                                {errorMessage}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="flex justify-center space-x-3">
                            {otp.map((digit, index) => (
                                <Input
                                    key={index}
                                    ref={setInputRef(index)} /* Fixed ref callback */
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-12 text-center text-lg font-semibold"
                                    aria-label={`Digit ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-violet-700 hover:bg-violet-800"
                            disabled={isLoading || otp.join('').length !== 4}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                'Verify Account'
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 space-y-3">
                        <div className="text-center text-sm text-gray-600">
                            Didn't receive the code?{' '}
                            <button
                                type="button"
                                onClick={() => setErrorMessage('Please check your spam folder or try registering again.')}
                                className="text-violet-700 hover:underline font-medium"
                            >
                                Resend code
                            </button>
                        </div>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => router.push('/register')}
                                className="text-sm text-violet-700 hover:underline"
                            >
                                Wrong email? Go back
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}