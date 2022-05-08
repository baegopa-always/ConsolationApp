import { View,Image } from "@aws-amplify/ui-react";
import React from "react";
import { Container,Grid } from "@mui/material";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BannerUI() {
  return (
    <Carousel fade interval={800}>
      <Carousel.Item>
      <Image
      src={require(`./img/HomeBanner/banner1.png`)}
      width="1100px"
      height="400px"
  />
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src={require(`./img/HomeBanner/banner3.jpg`)}
      width="1100px"
      height="400px"
  />
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src={require(`./img/HomeBanner/banner2.png`)}
      width="1100px"
      height="400px"
  />
      </Carousel.Item>
    </Carousel>
  );
}

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "80%",
        borderBottom: "1px solid #ccc",
        lineHeight: "0.1em",
        margin: "20% 10% 15%",
      }}
    >
    </div>
  );
};
export default function Overview(){
    return(
    <Container className="home">
      <br/>
      <BannerUI/>
      <p className="bground"><br/><h1 className="center-h1">
        <br/>걱정과 고민을 한번에
      </h1>
      <h2 className="center-h2">편하게 대화해보세요</h2>
      </p><br/><br/><HorizonLine/>
          <Grid 
          ainer spacing={0} columns={16}>
      <View border="1px"
      boxShadow="6px var(--amplify-colors-neutral-60)">
  <div className="container">
    <Image
      src={require(`./img/HomeOpening/console3.png`)}
      width="40%"
      marginLeft="10%"
      border="1px"
      boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
  />
    <p><h1>
      "괜찮아질 거에요"
    </h1></p>
  </div>
  </View>
  <HorizonLine/>
  <View border="1px"
      boxShadow="6px var(--amplify-colors-neutral-60)">
  <div className="container">
  <p>
    <h1>
     "잘하고 있어요"
    </h1>
    </p>
  <Image
      src={require(`./img/HomeOpening/console1.png`)}
      marginLeft="10%"
      width="40%"
      border="1px"
      boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
      />
  </div></View>
</Grid>
<HorizonLine/>
<View border="1px"
      boxShadow="6px var(--amplify-colors-neutral-60)">
  <div className="container">
    <Image
      src={require(`./img/HomeOpening/covid.png`)}
      width="40%"
      marginLeft="10%"
      border="1px"
      boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
  />
    <p><h1>
      "고민을 말해보세요"
    </h1></p>
  </div>
  <HorizonLine/>
  </View>
</Container>
);
}

export {HorizonLine};