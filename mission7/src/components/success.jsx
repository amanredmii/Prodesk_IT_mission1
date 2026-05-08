

function Success() {
    return (
        <div className="text-center py-10">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg">
                ✓
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Success!
            </h1>

            <p className="text-gray-500 text-lg">
                Your form has been submitted successfully.
            </p>
        </div>
    );
}

export default Success;