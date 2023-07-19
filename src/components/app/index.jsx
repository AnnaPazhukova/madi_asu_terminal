import { CardList } from "../cards";
import Header from "../header";
import { Table } from "../../pages/sheduleByGroups/index";
import DropdownTeachers from "../dropdown/teachers";
import DropdownDay from "../dropdown/data";
import DropdownGroups from "../dropdown/groups";

function App() {
  return (
            <>
              <Header/>
              <CardList/>
              <DropdownTeachers/> 
              <DropdownDay/>
              <DropdownGroups/>
              <Table/>
              {/* <Route path='/groups' element={<ProductPage />} /> */}
            </>
        )
}

export default App;