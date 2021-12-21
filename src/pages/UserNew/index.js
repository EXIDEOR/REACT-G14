import React from "react";
import { useState } from "react/cjs/react.development";

//services
import { createuser } from "../../services/user";

//css
import "./UserNew.css";

//Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

function UserNew() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const opGender = [
    {
      opValue: "M",
      opText: "Masculino",
    },
    {
      opValue: "F",
      opText: "Femenino",
    },
    {
      opValue: "X",
      opText: "Detergente",
    },
  ];

  const opActivity = [
    {
      opValue: "diseñador",
      opText: "Diseñador",
    },
    {
      opValue: "arquitecto",
      opText: "Arquitecto",
    },
    {
      opValue: "developer",
      opText: "Desarrollador",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(gender);
    try {
      await createuser({
        firstName,
        lastName,
        gender,
        activity,
        birthdate,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container form-col">
      <h1>Crea un usuario</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id={"firstName"}
          label={"firstName"}
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          id={"lastName"}
          label={"Last Name"}
          value={lastName}
          setValue={setLastName}
        />
        <Select
          label={"Gender"}
          value={gender}
          setValue={setGender}
          options={opGender}
        />
        <Select
          label={"Ocupation"}
          value={activity}
          setValue={setActivity}
          options={opActivity}
        />
        <Input
          type={"date"}
          id={"birthdate"}
          label={"Birth Date"}
          value={birthdate}
          setValue={setBirthdate}
        />
        <Button type={"submit"} text={"Create User"} />
      </form>
    </div>
  );
}

export default UserNew;
