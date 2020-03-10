import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
    return (
        <div>
       <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            <img src="./assets/Profilepic.jpg" width="150" align="left" style="margin:0 20px 0 0"/>
            My name is Nichole Steig and
                    I'm a Seattle native currently living with my partner and our
                    two cats.
                    While I majored in psychology, I have a love of video games and technology and am currently studying programming. Like many millenials, I was
                    raised on the internet, spending much of my teenage years seeking out weird knowledge wherever I could
                    find
                    it. As an adolescent, I escaped from the awkwardness of growing up with video games. There were whole
                    new
                    worlds for me to explore and secrets to find. As I got older, I wished more and more that I could create
                    my
                    own worlds and stories. Art is also very important to me, and I have a passion for music in particular.
                    I also enjoy math and logic, so I'm very excited to explore programming from both a technical and
                    artistic angle. My dream job would be to work in the video game field, but I would be thrilled
                    to do
                    anything in the tech field that allows me to be both analytical and creative. </p>
          </Col>
        </Row>
      </Container>     
        </div>
    );
}

export default Home;