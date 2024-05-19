import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover img={orderCover} title={"Order Food"} />
      <Tabs
        className={`max-w-7xl mx-auto`}
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-lg font-semibold flex justify-center items-center gap-4 pt-16 pb-6">
          <Tab
            className={`border-b-[6px] rounded-b-lg px-2 py-1.5 focus-visible:outline-none ${
              tabIndex === 0 ? "border-red-500" : ""
            }`}>
            Salad
          </Tab>
          <Tab
            className={`border-b-[6px] rounded-b-lg px-2 py-1.5 focus-visible:outline-none ${
              tabIndex === 1 ? "border-red-500" : ""
            }`}>
            Pizza
          </Tab>
          <Tab
            className={`border-b-[6px] rounded-b-lg px-2 py-1.5 focus-visible:outline-none ${
              tabIndex === 2 ? "border-red-500" : ""
            }`}>
            Soup
          </Tab>
          <Tab
            className={`border-b-[6px] rounded-b-lg px-2 py-1.5 active:outline-none ${
              tabIndex === 3 ? "border-red-500" : ""
            }`}>
            Dessert
          </Tab>
          <Tab
            className={`border-b-[6px] rounded-b-lg px-2 py-1.5 active:outline-none ${
              tabIndex === 4 ? "border-b-red-500" : ""
            }`}>
            Drinks
          </Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
