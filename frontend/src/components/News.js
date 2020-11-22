import React from "react";
import { List, Grid, Container } from "semantic-ui-react";
import { Badge, Card, Button }from 'react-bootstrap';
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
      borderRadius: 55,
  }
}

const ArticleItem = props => {
  const { article } = props;
  return (
    <List.Item style={{ padding: 30 }}>
      <Grid>
        <Grid.Column
          width={11}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}>
          <Card style={styles.card}>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
              {article.description}
              </Card.Text>
              <Button variant="secondary" on> <center>Go to <Card.Link to={article.url}>{article.source.name}</Card.Link></center></Button>
            </Card.Body>
          </Card>
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};

const ArticleList = props => {
  return (
    <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
      {props.articles.map((article, index) => (
          <ArticleItem article={article} key={article.title + index} />
      ))}
    </List>
  );
};

export class News extends React.Component {

  constructor(props) {
    super(props);

    this.parameters = queryString.parse(this.props.location.search)

    this.state = {
      articles: [],
      searchTopic: "",
      totalResults: "",
      loading: false,
      apiError: "",
    };

  }

  componentDidMount(){
    fetch(
      `https://newsapi.org/v2/everything?q=`+ this.parameters.topic +`&sortBy=popularity&language=en&apiKey=00c8d3561b9642528ce180bc37dac50e`
    )
    .then(res => res.json())
    .then(result => this.setState({
      searchTopic: this.parameters.topic,
      articles: result.articles,
      totalResults: result.totalResults
    }));
  }

  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults,
    } = this.state;
    return (
      <div>
        <div>
            <NavigationBar topic={this.parameters.topic} />
        </div>
        <Container >
          {loading && (
            <p style={{ textAlign: "center" }}>Searching for articles...</p>
          )}
          {articles.length > 0 && (
            <h1><center><Badge variant="dark"><span style={{color:'white'}}>News</span></Badge></center></h1>
          )}
          {articles.length > 0 && <ArticleList articles={articles} />}
          {apiError && <p>Could not fetch any articles. Please try again.</p>}
        </Container>
      </div>
    );
  }
}