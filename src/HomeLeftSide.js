import {Link, View} from "@aws-amplify/ui-react";
import HomeComponent from "./HomeComponent";

export default function HomeLeftSide(){
    return (
      <View width="100%">
        <header>
          <Link href="/">
          <img src={require('./img/HomeOpening/logo.png')} width="200px" height="80px" alt="logo"/>
          </Link><br></br>
        </header>
        <footer>
          <HomeComponent/>
        </footer>
      </View>
    )
}