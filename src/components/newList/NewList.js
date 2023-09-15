import { useEffect, useState } from "react";
import { getAllListTypes, saveNewList } from "../../services/wishListService";
import { useNavigate } from "react-router-dom";

export const NewList = ({ currentUser }) => {
  const [listTypes, setListTypes] = useState([]);
  const [wishList, setWishList] = useState({
    name: "",
    typeId: 0,
    creatorId: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    getAllListTypes().then((typesArray) => {
      setListTypes(typesArray);
    });
  }, []);

  const updateList = (evt) => {
    const copy = { ...wishList };
    copy[evt.target.id] = evt.target.value;
    copy.creatorId = currentUser.id;
    setWishList(copy);
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveNewList(wishList);
    navigate("/");
  };

  return (
    <form onSubmit={handleSave}>
      <h1>New Wish List</h1>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Wish List Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter a name for your list"
          onChange={updateList}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Wish List Type:
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="typeId"
          onChange={updateList}
          required
        >
          <option defaultValue value="0" key="0">
            Choose a Wish List Type ...
          </option>
          {listTypes.map((listTypeObj) => {
            return (
              <option value={listTypeObj.id} key={listTypeObj.id}>
                {listTypeObj.name}
              </option>
            );
          })}
        </select>
        <button type="button submit" className="btn btn-primary btn-lg">
          Create List
        </button>
      </div>
    </form>
  );
};
