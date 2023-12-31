import { Route, Routes, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Welcome } from "../components/welcome/Welcome";
import { NewList } from "../components/newList/NewList";
import { MyLists } from "../components/myLists/MyLists";
import { NavBar } from "../components/nav/NavBar";
import { EditWishList } from "../components/editList/EditList";
import { ListDetails } from "../components/listDetails/ListDetails";
import { NewItem } from "../components/newItem/NewItem";
import { EditItem } from "../components/editItem/EditItem";
import { FindList } from "../components/findList/FindList";
import { ShoppingList } from "../components/shoppingList/ShoppingList";
import { ItemDetails } from "../components/items/ItemDetails";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localGiftUser = localStorage.getItem("gift_user");
    const giftUserObj = JSON.parse(localGiftUser);

    setCurrentUser(giftUserObj);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="lists">
            <Route
              path="newWishList"
              element={<NewList currentUser={currentUser} />}
            />
            <Route
              path="myLists"
              element={<MyLists currentUser={currentUser} />}
            />
            <Route
              path=":listId"
              element={<ListDetails currentUser={currentUser} />}
            />
            <Route
              path=":listId/edit"
              element={<EditWishList currentUser={currentUser} />}
            />
            <Route path=":listId/newItem" element={<NewItem />} />
            <Route path="findList" element={<FindList />} />
          </Route>
          <Route path="items">
            <Route
              path=":itemId"
              element={<ItemDetails currentUser={currentUser} />}
            />
            <Route path=":itemId/edit" element={<EditItem />} />
          </Route>
          <Route
            path="/shoppingList"
            element={<ShoppingList currentUser={currentUser} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
