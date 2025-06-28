import EntitiesDetails from "../EntitiesDetails";
import FilterField from "../FilterField";
import Jfcs from "../Jfcs";
import JobFunctions from "../JobFunctions";
import JobTitleHistory from "../JobTitleHistory";
import PeopleAdditionDeletion from "../PeopleAdditionDeletion";
import PeopleDetails from "../PeopleDetails";
import PeopleJobsDetails from "../PeopleJobsDetails";
import SearchField from "../SearchField";
import "./index.css";


const Home = () => {
  return (
    <div className="home p-2">
      {/* <AddPerson /> */}
      {/* <JobDetails /> */}
      <div className="d-flex head mb-2 shadow p-1">
        <div className="searchfield me-3 shadow p-2">
            <SearchField />
        </div>
        <div className="filter-field me-3 shadow p-2">
            <FilterField />
        </div>
        <div className="jfcs me-3 shadow p-2">
            <Jfcs />
        </div>
        <div className="people-addition-deletion shadow p-2">
            <PeopleAdditionDeletion />
        </div>
      </div>

      <div className="d-flex mb-2 shadow p-1">
        <div className="enities-details me-3 shadow p-1">
            <EntitiesDetails />
        </div>
        <div className="people-details me-3 shadow p-1">
            <PeopleDetails />
        </div>
      </div>
      <div className="d-flex mb-2 shadow p-1">
        <div className="enities-details me-3 shadow p-1">
            <PeopleJobsDetails />
        </div>
        <div className="people-details me-3 shadow p-1">
            <JobTitleHistory />
            <JobFunctions />
        </div>
      </div>
    </div>
  );
}

export default Home;
