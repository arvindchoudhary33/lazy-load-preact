import { h } from "preact";
import { useState } from "preact/hooks";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import style from "./index.css";
import { Input } from "@chakra-ui/react";
const TabBar = () => {
  const [value, setValue] = useState({ one: true, two: false, three: false });
  console.log(value.one);
  return (
    <div style="width:500px; height:200px;">
      <Tabs isFitted variant="enclosed" style="margin-bottom:20px;">
        <TabList>
          <Tab
            onClick={() => setValue({ one: true, two: false, three: false })}
          >
            One
          </Tab>
          <Tab
            onClick={() => setValue({ one: false, two: true, three: false })}
          >
            Two
          </Tab>
          <Tab
            onClick={() => setValue({ one: false, two: false, three: true })}
          >
            Three
          </Tab>
        </TabList>

        {/* <TabPanels p="2rem"> */}
        {/*   <TabPanel>one</TabPanel> */}
        {/*   <TabPanel>two</TabPanel> */}
        {/*   <TabPanel>three</TabPanel> */}
        {/* </TabPanels> */}
      </Tabs>
      <div class={value.one ? style.display : style.hide}>
        <Input type="text" placeholder="enter something" />
      </div>
      <div class={value.two ? style.display : style.hide}>
        <Input type="text" placeholder="enter something" />
      </div>
      <div class={value.three ? style.display : style.hide}>
        <Input type="text" placeholder="enter something" />
      </div>
    </div>
  );
};

export default TabBar;
