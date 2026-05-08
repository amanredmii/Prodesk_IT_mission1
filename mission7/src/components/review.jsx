function Review({
    formData,
    prevStep,
    handleSubmit,
}) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Review Details
            </h2>

            <p className="text-gray-500 mb-8">
                Please confirm your information
            </p>

            <div className="space-y-4">
                <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        First Name
                    </p>
                    <h3 className="font-semibold text-lg">
                        {formData.firstName}
                    </h3>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Last Name
                    </p>
                    <h3 className="font-semibold text-lg">
                        {formData.lastName}
                    </h3>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Date of Birth
                    </p>
                    <h3 className="font-semibold text-lg">
                        {formData.dob}
                    </h3>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Email
                    </p>
                    <h3 className="font-semibold text-lg">
                        {formData.email}
                    </h3>
                </div>
            </div>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={prevStep}
                    className="w-1/2 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold transition"
                >
                    ← Back
                </button>

                <button
                    onClick={handleSubmit}
                    className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                    Submit ✓
                </button>
            </div>
        </div>
    );
}

export default Review;