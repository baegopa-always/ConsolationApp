import { Image } from "@aws-amplify/ui-react";
import { Container} from "@mui/material";
import {HorizonLine} from './Overview';

export default function Contact(){
    return(
        <Container className="home"
        ><br/>
        <Image
        src={require(`./img/HomeOpening/Contact_a.gif`)}
        width="1100px"
        height="400px"/>
                <h1>
                  안녕하세요 위로해조입니다.
                </h1>
                  <p>
                    abcd
                    </p>
                    <HorizonLine/>
        </Container>
    )
}