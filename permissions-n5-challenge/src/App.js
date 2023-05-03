import React from "react";
import PermissionsContextProvider from './states/PermissionsContext';
import { Routes, Route} from "react-router-dom";
import {Permissions}  from './layouts/Permissions';
import {PermissionsType}  from './layouts/PermissionsType';

function App() {
  return (
    <PermissionsContextProvider>
        <Routes>
          <Route path='permissions' element={<Permissions />} />
          <Route path='permissionsType' element={<PermissionsType />} />
        </Routes>
    </PermissionsContextProvider>
  );
}

export default App;
