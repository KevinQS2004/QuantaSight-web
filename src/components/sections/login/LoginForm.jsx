import React from 'react';
import { Brain } from 'lucide-react';
import { FormInput, FormCheckbox } from '../../common/FormElements';
import { PrimaryButton } from '../../common/Button';
import logo from "../../../assets/images/qs_logo_small.png";
import qs_name_nobg from "../../../assets/images/qs_name_nobg.png";

const LoginForm = ({ darkMode }) => {
    return (
        <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto">
                    <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex justify-center mb-8">
                            <div className="flex items-center space-x-2">
                        <span className="h-10 w-10 flex items-center">
                            <img src={logo} alt="Logo" className="h-full w-auto object-contain"/>
                        </span>

                                <span className="h-8 flex items-center">
                            <img src={qs_name_nobg} alt="QuantaSight" className="h-full w-auto object-contain"/>
                        </span>
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold mb-6 text-center">Log in to your account</h1>

                        <form className="space-y-6">
                            <FormInput
                                label="Email Address"
                                type="email"
                                placeholder="Enter your email address"
                                darkMode={darkMode}
                            />

                            <div>
                            <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-medium">Password</label>
                                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                                </div>
                                <FormInput
                                    type="password"
                                    placeholder="Enter your password"
                                    darkMode={darkMode}
                                />
                            </div>

                            <FormCheckbox
                                label="Remember me"
                                darkMode={darkMode}
                            />

                            <PrimaryButton fullWidth={true}>
                                Sign In
                            </PrimaryButton>
                        </form>

                        <div className="mt-6 text-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Don't have an account? </span>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Contact us for access</a>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                                <p>By signing in, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Need help? <a href="#" className="text-blue-600 hover:underline">Contact our support team</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;