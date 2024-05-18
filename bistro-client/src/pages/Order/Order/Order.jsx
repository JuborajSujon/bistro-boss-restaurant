import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Cover img={orderCover} title={"Order Food"} />
      <Tabs
        className={`max-w-7xl mx-auto`}
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className=" flex justify-center items-center gap-3 pt-16 pb-6">
          <Tab
            className={`border-b-4 px-2 active:border-none ${
              tabIndex === 0 ? "border-red-500" : ""
            }`}>
            Salad
          </Tab>
          <Tab
            className={`border-b-4 px-2 active:border-none ${
              tabIndex === 1 ? "border-red-500" : ""
            }`}>
            Pizza
          </Tab>
          <Tab
            className={`border-b-4 px-2 active:border-none ${
              tabIndex === 2 ? "border-red-500" : ""
            }`}>
            Soup
          </Tab>
          <Tab
            className={`border-b-4 px-2 active:border-none ${
              tabIndex === 3 ? "border-red-500" : ""
            }`}>
            Dessert
          </Tab>
          <Tab
            className={`border-b-4 px-2 active:border-none ${
              tabIndex === 4 ? "border-b-red-500" : ""
            }`}>
            Drinks
          </Tab>
        </TabList>
        <TabPanel>Title 1 Content</TabPanel>
        <TabPanel>Title 2 Content</TabPanel>
        <TabPanel>Title 3 Content</TabPanel>
        <TabPanel>Title 4 Content</TabPanel>
        <TabPanel>Title 5 Content</TabPanel>
      </Tabs>
    </div>
  );
}
