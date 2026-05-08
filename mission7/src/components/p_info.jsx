function P_info({
    formData,
    handleChange,
    nextStep,
}) {

    const detailvalid =
        formData.firstName &&
        formData.lastName &&
        formData.dob;

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Personal Info
            </h2>

            <p className="text-gray-500 mb-8">
                Enter your basic details
            </p>

            <div className="space-y-5">
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition"
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition"
                />

                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition"
                />
            </div>

            <button
                onClick={nextStep}
                disabled={!detailvalid}
                className={`w-full mt-8 py-3 rounded-xl font-semibold text-white transition-all duration-300
                ${detailvalid
                        ? "bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.02] shadow-lg"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
            >
                Next →
            </button>
        </div>
    );
}

export default P_info;