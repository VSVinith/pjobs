import { useState } from "react";
import { useSelector } from "react-redux";

const AddPerson = () => {
  const { crudOption } = useSelector((state) => state.personSlice);

  const [filerName, setFilerName] = useState("");
  const [firmName, setFirm] = useState("");
  const [jfc, setPersonJfc] = useState("");
  const [id, setId] = useState("");
  const [iso, setIso] = useState("");
  const [type, setType] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [termDate, setTermDate] = useState("");
  const [inceptionDate, setInceptionDate] = useState("");
  const [auditTrail, setAuditTrial] = useState("");
  const [personIconum, setPersonIconum] = useState("");

  const onChangeName = (event) => {
    setFilerName(event.target.value);
  };
  const onChangeFirm = (event) => {
    setFirm(event.target.value);
  };
  const onChangeJFC = (event) => {
    setPersonJfc(event.target.value);
  };
  const onChangeId = (event) => {
    setId(event.target.value);
  };
  const onChangeIso = (event) => {
    setIso(event.target.value);
  };
  const onChangeType = (event) => {
    setType(event.target.value);
  };
  const onChangeJobTitle = (event) => {
    setJobTitle(event.target.value);
  };
  const onChangeTermDate = (event) => {
    setTermDate(event.target.value);
  };
  const onChangeAuditTrial = (event) => {
    setAuditTrial(event.target.value);
  };
  const onChangePersonIconum = (event) => {
    setPersonIconum(event.target.value);
  };
  const onChangeIncepDate = (event) => {
    setInceptionDate(event.target.value);
  };

  const addPersonDetails = {
    filerName,
    firmName,
    jfc,
    iso,
    type,
    jobTitle,
    termDate,
    auditTrail,
    personIconum,
    inceptionDate,
  };

  const delPersonDetails = {};

  const addPerson = async () => {
    const api = `https://retoolapi.dev/c2OJqr/data`;
    // const api = "https://api-generator.retool.com/7VoO3Y/data"
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addPersonDetails),
    };

    console.log(addPersonDetails);
    const response = await fetch(api, options);
    console.log("add response: ", response);
  };

  const delPerson = async () => {
    const api = `https://retoolapi.dev/c2OJqr/data/${id}`;
    const options = {
      method: "DELETE",
      // headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({
      //     id: `${id}`
      // })
    };

    const response = await fetch(api, options);
    console.log("deleted", id);
  };

  if (crudOption === "add") {
    return (
      <>
        <div>
          <label>Name</label>
          <input type="text" onChange={onChangeName} />
          <label>Firm</label>
          <input type="text" onChange={onChangeFirm} />
          <label>JFC</label>
          <input type="text" onChange={onChangeJFC} />
          <label>ISO</label>
          <input type="text" onChange={onChangeIso} />
          <label>Type</label>
          <input type="text" onChange={onChangeType} />
          <label>Job Title</label>
          <input type="text" onChange={onChangeJobTitle} />
          <label>Termination Date</label>
          <input type="text" onChange={onChangeTermDate} />
          <label>Inception Date</label>
          <input type="text" onChange={onChangeIncepDate} />
          <label>Audit Trial</label>
          <input type="text" onChange={onChangeAuditTrial} />
          <label>Person Iconum</label>
          <input type="text" onChange={onChangePersonIconum} />
        </div>
        <button onClick={addPerson}>Add</button>
      </>
    );
  }

  //   return (
  //     <>
  //       <div>
  //         <label>Name</label>
  //         <input type="text" onChange={onChangeName} />
  //         <label>Firm</label>
  //         <input type="text" onChange={onChangeFirm} />
  //         <label>JFC</label>
  //         <input type="text" onChange={onChangeJFC} />
  //         <label>ISO</label>
  //         <input type="text" onChange={onChangeIso} />
  //         <label>Type</label>
  //         <input type="text" onChange={onChangeType} />
  //         <label>Job Title</label>
  //         <input type="text" onChange={onChangeJobTitle} />
  //         <label>Termination Date</label>
  //         <input type="text" onChange={onChangeTermDate} />
  //         <label>Inception Date</label>
  //         <input type="text" onChange={onChangeIncepDate} />
  //         <label>Audit Trial</label>
  //         <input type="text" onChange={onChangeAuditTrial} />
  //         <label>Person Iconum</label>
  //         <input type="text" onChange={onChangePersonIconum} />
  //       </div>
  //       <button onClick={addPerson}>Add</button>
  //       <div>
  //         <label>id</label>
  //         <input type="text" onChange={onChangeId} />
  //       </div>
  //       <button onClick={delPerson}>Delete</button>
  //     </>
  //   );
  // };

  return (
    <>
      <div>
        <label>id</label>
        <input type="text" onChange={onChangeId} />
      </div>
      <button onClick={delPerson}>Delete</button>
    </>
  );
};

export default AddPerson;
