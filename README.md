# PosiTweety

## Inspiration

Hiya PosiTweeps! **We would like our app, _PosiTweety_ to take part in the “Social Good” category** and here is our inspiration as to why. 

In our quest to do something socially useful, we found it _unusually difficult to find relevant topics_ and were _limited by our knowledge about current events_. This was further reinforced by the fact that “hot” topics such as entertainment, sports and politics often dwarf other “Socially impactful” ones.
 
Thus, we decided to make a **_one-stop solution_** that will help _spread awareness and knowledge about various global issues_. We realised that if the people as a whole work towards making a change, anything is possible. For that to happen, people need to be aware of the latest trends and topics in “Social Good” before they can contribute to it. We thought the best way for us to do social good is to _provide a platform which generates awareness and empowers others to do the same_.
 
There was nothing better than Twitter, one of the world's leading social media platforms to spread awareness and analyse socially relevant topics. We aimed to create our hack keeping in mind Twitter’s principles of **#fast, #fun, #impactful and #straightforward**.
  
Thus came our inspiration for Positweety, a software which lets users **_explore_**, **_learn_** and **_contribute_** to making the world a better place.      

## What it does

* Positweety provides _mesmerizing visuals_, _3D networks_, _interactive dashboards_ and _dynamic analytics_ to spread awareness and learn more about different topics.
It uses issues **[laid out by the UN]** (https://www.un.org/en/sections/issues-depth/global-issues-overview/) to scrape data from the internet for over 20 of the most impactful categories in the society today.
 
* Using these categories, it _scrapes the internet_ to find the _most relevant hashtags_ for each category and group them together. It also _generates analytical data_ like the number of hits per hashtag and the distribution of usage for the top hashtags in the category. 

* PosiTweety makes it _fun to learn and explore_ about socially relevant topics. It does this by generating a **#Map** : A beautiful, dynamic and interactive 3D network of the Hashtags and color coded based on the category to which they belong!

* Users can also _search for a topic_ of their choice using the search bar or explore a certain category using the legend.
On selecting one of the displayed categories, the user is redirected to a _dashboard for that specific “Category”_. This is full of useful features such as:

* **Visual #Board**: Using the data Positweety scrapes from the net, _powerful and informative visualizations_ are rendered for the user, such as: 
  * **_Hashtag Use by Percentage_** : This includes an _interactive 3D pie chart_ of the top hashtags for that specific category, representing their percentage use out of the total in that category.
  * **_Most relevant tags_** : An interactive _bar chart_ representing the number of hits which each hashtag gets in that category. This not only lets the user _understand the overall scale_ of each topic, but also lets them decide which tags will help them reach out to a larger audience and have a greater impact.
  * **_Recommended #Tags_** : Positweety lists out the _top hashtags for each category_ so that the user can explore and learn more in an organized manner. The user can click on any of the listed hashtags to go to the custom **#Board** for that tag. The features of which will be explained in the following section. 
  * **_Other topics_**: In order to keep the user engaged, we also generate a _dynamic list of other topics_ the user might want to look into, with each entry linking to its custom **#Board**. 

* If the user searches for a topic or clicks on a topic from the **#Map**, they are redirected to the other standout feature of Positweety: the **#Board**.
The **#Board**  is a custom dashboard to learn more about the category which the user has selected. It has a lot of fun features as given below:
    * **_Tweets_**: Positweety used _Twitter API_ to _gather and display tweets relevant to the hashtag_ which the user has selected. This lets the user _understand what others think_ about the given topic.
    * **_About_**: Positweety _scrapes the internet to generate descriptions_ for each topic, so that the _user can learn more_ about it. This _generates awareness_ among users for each topic.
    * **_Media_**: In this section, the user is _shown a gallery of all relevant media on twitter_ for the topic which they have selected. This _engages the user and helps them make a visual picture_ of the particular topic. 
    * **_News_**: This section _provides the user with relevant news_ regarding the topic in question, helping them _form a well rounded opinion_ of the topic without any bias. We believe this is important for users to have a positive impact on society. The user can _choose to go to the original source_ for any news article from the dashboard for more info.
    * **_Resources_**: This uses Twitter's awesome API to _find useful resources_ which the user can look into. This includes _external or internal URL links_, links to places where the user can _contribute for a cause_ or any other relevant topic!


## How we built it

We used the following technologies to build Positweety:

* Python
* Javascript
* React
* Node.js
* Flask
* 2 sleepless nights XD

Positweety has a _Flask backend_, which interacts with the twitter API and runs our algorithms for collecting news, scraping, preparing and processing data and doing all the heavy-work behind the scenes. All the libraries we used for our backend are stored in the requirements.txt file.

The _frontend_ for Positweety was built on _React_, allowing for rapid development and scaling for our hack. This allowed to create beautiful animations like the **#Map**, powerful visualizations like those on the **Category Dashboard** and make an overall engaging frontend. 



## Challenges we ran into

One of our biggest challenges was definitely _time management_. Right from ideation to implementation, we had to ensure we paced ourselves and executed what we had in mind. Since we were _only a team of 2 members_, we had to put in _extra effort_ to bring our idea to life and achieve our goal of building a production ready hack. In order to do this, we made sure to follow good coding practices, optimize our algorithms and follow proper devOps procedures as much as possible.

We had both used react and flask before, but we had _never integrated them together in an app_. We had to ensure our full stack hack was functioning properly and giving the desired results. React being a primarily tool for building single page websites, we had to optimize and use it efficiently for our multi page frontend, all the while ensuring the workflow was in sync with our flask backend.

Another major challenge for us was to **_make our hack engaging_**. Since we _wanted our users to learn and explore on Positweety_, it was of utmost importance that they enjoyed their time using it. In order to accomplish this, we _surveyed our fellow students_ and _welcomed insights and criticisms as to what could make Positweety more engaging and informative_. We _implemented cool animations, visualizations_ and tried to use the data at hand as effectively as possible to bring our ideas to life. 

## Accomplishments that we are proud of

One of our major accomplishments was _building a comprehensive, well-rounded hack_ in such a short time with just 2 members. Both of us worked very hard and spent hours on end developing the hack as best as we could. 
This is also the first time we explored the features of react to such an extent. We spent a large amount of time researching, wacking our brains to build algorithms for our hack and making awesome features like the **#Map**. 
We never once thought of giving up and we _really wanted to achieve something impactful_ through our hack. That is what the both of us value the most in our experience during this hackathon.

## What we learned

At the beginning of our hackathon, we couldn’t even fathom how much we would and up learning. While building and exploring our hack, **_we actually ended up learning about a lot of topics and issues we didn’t even know existed!!_** 

We learnt how to come up with _impactful ideas_, _translate them to reality_ and discovered a lot of features about the tech we used which we otherwise would not have come across. We also built a lot of patience and aptitude during these 3 days. This was the first complex project we did under such a steep deadline and we are really proud of how it turned out.

**_Honestly, the best thing we learnt was that the world has a lot of problems, but more importantly, it also has people who want to do good and make a difference. The best decision we could have made was to attempt the “Social Good” category,try and understand the scale and scope of problems the world is facing today and play a small part in solving those issues!_**

## What's next for Positweety

We have come up with a few features we want to work on going forward, in order to make positweety better and even more helpful. These include:

* Scaling out to languages other than english.
* Build knowledge graphs on our 3d network instead of grouping relevant topics, in order to relay even more powerful visual information.
* With enough geocoded data, we can make interactive world maps to show which topics are relevant in which regions. And give insights based on geopolitical data.
* Using NLP and twitter API features to let the user filter content based on sentiment, region, time etc in the frontend itself.


