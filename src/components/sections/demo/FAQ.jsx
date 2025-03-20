import React from 'react';

const FAQ = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about the demo process
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-3">How long does a typical demo last?</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Our standard demo session lasts approximately 45-60 minutes. This includes a live demonstration of the platform tailored to your specific interests, plus time for questions and discussion.
                        </p>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-3">Who should attend the demo from our company?</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            We recommend including stakeholders from Medical Affairs, Pharmacovigilance, and Scientific Communications teams, as well as any technical decision-makers who would be involved in the implementation process.
                        </p>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-3">Can we try the platform ourselves during the demo?</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Yes! Our interactive demos include hands-on segments where you can experience the platform's capabilities firsthand. We encourage you to bring specific use cases or challenges that we can address during this portion.
                        </p>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-3">Is there a cost for the demo?</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            No, our product demonstrations are completely free of charge and come with no obligation to purchase. We're confident in the value our platform provides and want to show you how it can benefit your organization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;