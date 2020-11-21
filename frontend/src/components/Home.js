import { Card, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

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
    render() {
        return (
            <div className="m-5">
                <Row className="m-5">
                    <Col>
                        <Card style={styles.card} >
                            <Card.Img variant="top" style={styles.cardImage} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Information_icon.svg/1200px-Information_icon.svg.png" />
                            <Card.Body>
                            <Card.Title>About</Card.Title>
                            <Card.Text>
                                You might be wondering what this # or topic is all about. Don't worry, we got you covered. Head over to the link below for more info!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to="/dashboard/about">About</Card.Link></center>
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
                                <center>Go to <Card.Link as={Link} to="/dashboard/tweets">PosiTweets</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Img variant="top" style={styles.cardImage} src="https://www.xda-developers.com/files/2015/07/nexusae0_Google-Photos-icon-logo.png" />
                            <Card.Body>
                            <Card.Title>Media</Card.Title>
                            <Card.Text>
                                Why not also have a look at the images that people tweet along with what they say to know more about what's going on? Click below to explore media!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to="/dashboard/media">Media</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Img variant="top" style={styles.cardImage} src="https://image.flaticon.com/icons/png/512/21/21601.png" />
                            <Card.Body>
                            <Card.Title>News</Card.Title>
                            <Card.Text>
                                Cannot contain excitement of fact checking tweets with innumerable verified news? Head over the news section to look at thousands of articles specially curated for this topic!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to="/dashboard/news">News</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Img variant="top" style={styles.cardImage} src="https://www.flaticon.com/svg/static/icons/svg/1271/1271847.svg" />
                            <Card.Body>
                            <Card.Title>Resources</Card.Title>
                            <Card.Text>
                                Want to contribute to the NGO that tweeted? Want to explore more links and videos about this topic? Don't fret because our resources sections provides you with exactly this information! Go ahead and give it a look!
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <center>Go to <Card.Link as={Link} to="/dashboard/resources">Resources</Card.Link></center>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}