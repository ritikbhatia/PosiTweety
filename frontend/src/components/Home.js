import { Card, Row, Col,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import info from '../assets/information.png';
import media from '../assets/media.png';
import news from '../assets/news.png';
import resource from '../assets/resource.png';
import queryString from 'query-string';
import { NavigationBar } from './Navigationbar';


const styles = {
    card: {
        overflow: "hidden",
        borderRadius: 40,
    },
    cardImage: {
        width: "250px",
        margin: "auto",
        height: "250px",
        borderRadius: 55
    }
  }

export class Home extends React.Component {

    constructor(props){
        super(props);
        this.parameters = queryString.parse(this.props.location.search)
        console.log(this.parameters.topic);
    }

    render() {
        return (
            <div>
                <div>
                    <NavigationBar topic={this.parameters.topic} />
                </div>
                <br></br>
                <Container>
                <Row>
                    <Col>
                        <Card style={styles.card} >
                            <Card.Img variant="top" style={styles.cardImage} src={info} />
                            <Card.Body>
                            <Card.Title>About</Card.Title>
                            <Card.Text>
                                You might be wondering what this # or topic is all about. Don't worry, we got you covered. Head over to the link below for more info!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to={"/dashboard/about?topic="+this.parameters.topic}>About</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Img variant="top" style={styles.cardImage} src="https://icons-for-free.com/iconfiles/png/512/logo+twitter+twitter+logo+icon-1320190502069263658.png" />
                            <Card.Body>
                            <Card.Title>PosiTweets</Card.Title>
                            <Card.Text>
                                Who doesn't love to know about people's reactions to these positive topics. Head over to the link below to see popular tweets on this topic!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to={"/dashboard/tweets?topic="+this.parameters.topic}>PosiTweets</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Img variant="top" style={styles.cardImage} src={media} />
                            <Card.Body>
                            <Card.Title>Media</Card.Title>
                            <Card.Text>
                                Why not also have a look at the images that people tweet along with what they say to know more about what's going on? Click below to explore media!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to={"/dashboard/media?topic="+this.parameters.topic}>Media</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Img variant="top" style={styles.cardImage} src={news} />
                            <Card.Body>
                            <Card.Title>News</Card.Title>
                            <Card.Text>
                                Cannot contain excitement of fact checking tweets with innumerable verified news? Head over the news section to look at thousands of articles specially curated for this topic!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to={"/dashboard/news?topic="+this.parameters.topic}>News</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Img variant="top" style={styles.cardImage} src={resource} />
                            <Card.Body>
                            <Card.Title>Resources</Card.Title>
                            <Card.Text>
                                Want to contribute to the NGO that tweeted? Want to explore more links and videos about this topic? Don't fret cause our resources sections provides you with exactly this information!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to={"/dashboard/resources?topic="+this.parameters.topic}>Resources</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                </Container>
                <br></br>
            </div>
        );
    }
}