import {useState} from "react";

export const ContactForm = () => {
//   const[userName , setUserName] = useState("");
//   const[email , setEmail] = useState("");
//   const[message , setMessage] = useState("");
const[contacts , setContacts] = useState({
    userName: "",
    email: "",
    message: "",
});

  const handleformSubmit = (e) => {
     e.preventDefault();

    //  const contactData = {
    //    userName,
    //    email,
    //    message,
    //  };

     console.log(contacts);
  };

  const handleContactInput = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({...prev, [name]: value }));
  };



  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white w-[460px] h-[490px] p-8 rounded-2xl shadow-lg border-gray-500">
          {/* Heading */}
          <h1 className="text-5xl font-bold mb-6 text-center">Contact Form</h1>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleformSubmit}>
            {/* Username */}
            <div>
              <label
                htmlFor="userName"
                className="block text-2xl font-bold text-black mb-3"
              >
                Username
              </label>
              <input
                type="text"
                name="userName"
                required
                autoComplete="off"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-gray-400 text-2xl"
                value={contacts.userName}
                onChange={handleContactInput}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-2xl font-bold text-black mb-3"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-gray-400 text-2xl"
                value={contacts.email}
                onChange={handleContactInput}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-2xl font-bold text-black mb-3"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                autoComplete="off"
                rows="6"
               className="w-full h-[150px] p-2 border border-gray-300 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-gray-400 text-2xl"
               value={contacts.message}
               onChange={handleContactInput}
            //    onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-28 w-full h-[45px] bg-blue-500 text-white text-3xl from-neutral-300 py-2 rounded-2xl hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
