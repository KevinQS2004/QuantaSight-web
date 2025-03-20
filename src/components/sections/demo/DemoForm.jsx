import React from 'react';
import { FormInput, FormSelect, FormTextarea, FormCheckbox } from '../../common/FormElements';
import { FormButton } from '../../common/Button';

const DemoForm = ({ darkMode }) => {
    // Demo form options
    const interestOptions = [
        { value: 'xtract', label: 'Xtract - Scientific Research & Analysis' },
        { value: 'atlas', label: 'Atlas - Pharmacovigilance Monitoring' },
        { value: 'workroom', label: 'Workroom - Collaboration & Content Creation' },
        { value: 'crm', label: 'AI CRM - Client Management' },
        { value: 'full', label: 'Full Platform Demo' }
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    darkMode={darkMode}
                                />
                                <FormInput
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    darkMode={darkMode}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter your email address"
                                    darkMode={darkMode}
                                />
                                <FormInput
                                    label="Phone Number"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    darkMode={darkMode}
                                />
                            </div>

                            <FormInput
                                label="Company Name"
                                placeholder="Enter your company name"
                                darkMode={darkMode}
                            />

                            <FormInput
                                label="Job Title"
                                placeholder="Enter your job title"
                                darkMode={darkMode}
                            />

                            <FormSelect
                                label="What are you most interested in?"
                                options={interestOptions}
                                darkMode={darkMode}
                            />

                            <FormTextarea
                                label="Additional Comments"
                                placeholder="Tell us about your specific needs or questions"
                                rows={4}
                                darkMode={darkMode}
                            />

                            <FormCheckbox
                                label="I agree to receive communications from QuantaSight. You can unsubscribe at any time. View our Privacy Policy."
                                darkMode={darkMode}
                            />

                            <div className="flex justify-center">
                                <FormButton text="Request Your Demo" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;