import React from "react";
import { List, Grid, Container, Header, Image } from "semantic-ui-react";
import {Card,Button}from 'react-bootstrap';

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

const ArticleItem = props => {
  const { article } = props;
  return (
    <List.Item style={{ padding: 30 }}>
      <Grid>
        {/* <Grid.Column
          width={11}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}
        >
          <Header as="h3">{article.title}</Header>
          <List.Description style={{ margin: "20px 0" }}>
            {article.description}
          </List.Description>
          <List bulleted horizontal>
            <List.Item>
                Link to the article: <a href={article.url}>{article.source.name}</a>
            </List.Item>
            <List.Item> Date Published: {article.publishedAt.split("T")[0]}</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={5}>
          <Image src={article.urlToImage} height="400px" width="900px" />
        </Grid.Column> */}
        <Grid.Column
          width={11}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}
        >
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
      `https://newsapi.org/v2/everything?q=India&sortBy=popularity&language=en&apiKey=00c8d3561b9642528ce180bc37dac50e`
    )
    .then(res => res.json())
    .then(result => this.setState({
      searchTopic: "India",
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
      <Container >
        {loading && (
          <p style={{ textAlign: "center" }}>Searching for articles...</p>
        )}
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
    );
  }
}