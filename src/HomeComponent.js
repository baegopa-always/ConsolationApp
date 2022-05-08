import { Tabs,TabItem } from "@aws-amplify/ui-react";
import Overview from "./Overview";
import Contact from "./Contact";

export default function HomeComponent(){
    return(
      <main>
      <Tabs justifyContent="center" spacing="equal" indicatorPosition="top">
  <TabItem title="Overview">
      <Overview/>
  </TabItem>
  <TabItem title="Contact">
    <Contact/>
  </TabItem>
</Tabs></main>
    )
}