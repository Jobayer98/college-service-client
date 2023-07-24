import { useState } from "react";
const AdmissionForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const collegeId = localStorage.getItem("collegeId");
    const user = {
      name,
      phone,
      email,
      date,
      subject,
      address,
      file,
      collegeId,
    };

    fetch("http://localhost:3000/mycollege", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    // Reset the form fields
    setName("");
    setPhone("");
    setEmail("");
    setDate(null);
    setAddress("");
    setFile(null);
    setSubject("");
  };

  return (
    <div className="mt-28">
      <h2 className="text-center text-4xl font-bold  my-8">Get An Admission</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="name">
            Candidate Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="name">
            Subject
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Enter your subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="phone">
            Candidate Phone
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Candidate Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Address
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="date">
            Date of birth
          </label>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="date">
            Image
          </label>
          <input type="file" onChange={(e) => setFile(e.target.value)} />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-8"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
