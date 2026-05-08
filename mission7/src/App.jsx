
import { useState } from "react";
import P_info from "./components/p_info";
import Ac_detail from "./components/ac_detail";
import Review from "./components/review";
import Success from "./components/success";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200">

        <div className="flex items-center justify-between mb-10 ml-20">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-1 flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300
                ${step >= item
                    ? "bg-indigo-600"
                    : "bg-gray-300"
                  }`}
              >
                {item}
              </div>

              {item !== 3 && (
                <div
                  className={`flex-1 h-1 transition-all duration-300
                  ${step > item
                      ? "bg-indigo-600"
                      : "bg-gray-300"
                    }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <P_info
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <Ac_detail
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <Review
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}

        {step === 4 && <Success />}
      </div>
    </div>
  );
}

export default App;