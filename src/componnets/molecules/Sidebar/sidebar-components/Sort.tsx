import Dropdown from "@/componnets/atom/Dropdown";
import SideBarAccordion from "./SidebarAccordion";

const Sort = () => {
  return (
    <SideBarAccordion open={true} label="Sort">
      <div>
        <p>Sort Result By:</p>
        <Dropdown />
      </div>
    </SideBarAccordion>
  );
};

export default Sort;
