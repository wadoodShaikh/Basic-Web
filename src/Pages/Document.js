const Document = () => {
  return (
    <>
      <div className="title">
        <h1>Documents</h1>
      </div>
      <div className="documentTable container">
        <div className="flexy">
          <h2>All Documents</h2>
          <input type="file" id="addFile" className="btn-inp" />
          <label for="addFile">Add Document</label>
        </div>
        <table className="tableProp">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th className="td-min">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-min-min">01</td>
              <td>Doc1</td>
              <td className="td-min">
                <button
                  className="btn btn-danger"
                  onClick={() => alert("Delete")}
                >
                  Delete
                </button>
                <button className="btn" onClick={() => alert("Edit")}>
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="td-min-min">02</td>
              <td>Doc2</td>
              <td className="td-min">
                <button
                  className="btn btn-danger"
                  onClick={() => alert("Delete")}
                >
                  Delete
                </button>
                <button className="btn" onClick={() => alert("Edit")}>
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="td-min-min">03</td>
              <td>Doc3</td>
              <td className="td-min">
                <button
                  className="btn btn-danger"
                  onClick={() => alert("Delete")}
                >
                  Delete
                </button>
                <button className="btn" onClick={() => alert("Edit")}>
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="td-min-min">04</td>
              <td>Doc4</td>
              <td className="td-min">
                <button
                  className="btn btn-danger"
                  onClick={() => alert("Delete")}
                >
                  Delete
                </button>
                <button className="btn" onClick={() => alert("Edit")}>
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Document;
