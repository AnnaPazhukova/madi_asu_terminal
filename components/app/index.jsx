import { CardList } from "../cards";
import Header from "../header";
import TableAboutGroups from "../../pages/sheduleByGroups/index";
import DropdownTeachers from "../dropdown/teachers";
import DropdownDay from "../dropdown/data";
import DropdownGroups from "../dropdown/groups";
import TableAboutTeachers from "../../pages/sheduleByTeacher";

function App() {
  return (
            <>
              {/* <Header/>
              <CardList/> */}
              <DropdownTeachers/> 
              <DropdownDay/>
              <DropdownGroups/>
              <TableAboutGroups/>
              <TableAboutTeachers/>
              {/* <Route path='/groups' element={<ProductPage />} /> */}
            </>
        )
}

export default App;