import React, {useState} from 'react'

export default function FormInput() {
    const [firstName, setFirstName] = useState("");
    const [surname, SetSurname] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(firstName, "and", surname);
  }
    return (
      <div className="App">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>First Name</label>
          <input
            className="name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Surname</label>
          <input
            className="surname"
            placeholder="Surname"
            value={surname}
            onChange={(e) => SetSurname(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>
    );
}
