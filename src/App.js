
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AddPerson from "./components/AddPerson";

function App() {
  return (
    // <div className="app p-2">
    //   <div className="d-flex head mb-2 shadow p-1">
    //     <div className="searchfield me-3 shadow p-2">
    //       <SearchField />
    //     </div>
    //     <div className="filter-field me-3 shadow p-2">
    //       <FilterField />
    //     </div>
    //     <div className="jfcs me-3 shadow p-2">
    //       <Jfcs />
    //     </div>
    //     <div className="people-addition-deletion shadow p-2">
    //       <PeopleAdditionDeletion />
    //     </div>
    //   </div>

    //   <div className="d-flex mb-2 shadow p-1">
    //     <div className="enities-details me-3 shadow p-1">
    //       <EntitesDetails />
    //     </div>
    //     <div className="people-details me-3 shadow p-1">
    //       <PeopleDetails />
    //     </div>
    //   </div>
    //   <div className="d-flex mb-2 shadow p-1">
    //     <div className="enities-details me-3 shadow p-1">
    //       <PeopleJobsDetails />
    //     </div>
    //     <div className="people-details me-3 shadow p-1">
    //       <JobTitleHistory />
    //       <JobFunctions />
    //     </div>
    //   </div>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/add' element={<AddPerson />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
