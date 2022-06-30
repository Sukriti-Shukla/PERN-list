import React, { Fragment, useState } from "react";
//import { connect } from "react-redux";

export const InputList = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [chemicalName, setChemicalName] = useState("");
  const [supplier, setSupplier] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, description, chemicalName, supplier };
      const response = await fetch("http://localhost:5000/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          body.name,
          body.description,
          body.chemicalName,
          body.supplier
        ),
      });

      console.log(response);
      //window.location = "/";
      //console.log("submit");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5"> Chemical List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={chemicalName}
          onChange={(e) => setChemicalName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        />
        <button type="submit" className="btb btn-success">
          Add
        </button>
      </form>
    </Fragment>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(InputList);
