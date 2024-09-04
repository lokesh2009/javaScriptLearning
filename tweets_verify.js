/* Are you ready to perform some Data Analysis with JavaScript? In this problem, 
we'll analyze some fictional tweets and find out whether the overall sentiment of 
Twitter users is happy or sad. This is a simplified version of an important real-world
 problem called sentiment analysis.

Before we begin, we need a list of tweets to analyze. We're picking a small number of 
tweets here, but the exact same analysis can also be done for thousands or even millions of tweets.
 The collection of data that we perform analysis on is often called a dataset. */


let tweets =[
    "Wow, what a great day today!! #sunshine",
    "I feel sad about the things going on around us. #covid19",
    "I'm really excited to learn JavaScript with @JovianHQ #fsdbootcamp",
    "This is a really nice song. #linkinpark",
    "The JavaScript programming language is useful for full stack development",
    "Why do bad things happen to me?",
    "Apple announces the release of the new iPhone 15. Fans are excited.",
    "Spent my day with family!! #happy",
    "Check out my blog post on common string operations in JavaScript. #fsdbootcamp",
    "Freecodecamp has great coding tutorials. #skillup"
];

console.log("************Q12: How many tweets does the dataset contain?******************************")

let number_of_tweets = tweets.length
console.log(number_of_tweets)

let happyWords = ['great', 'excited', 'happy', 'nice', 'wonderful', 'amazing', 'good', 'best'];
console.log(happyWords)

let sadWords = ['sad', 'bad', 'tragic', 'unhappy', 'worst']
console.log(sadWords)

console.log("*************To identify whether a tweet is happy, we can simply check if contains any of the words from happy_words.*****************")

let Sample_tweet = tweets[0];

let is_happy_tweets ;



happyWords.forEach(word =>{
    if(Sample_tweet.includes(word)){
        is_happy_tweets=true
    }
})

console.log(is_happy_tweets)

console.log("Determine the number of tweets in the dataset that can be classified as happy")
 let number_of_happyTweets =0;
 tweets.forEach(tweet =>{
    happyWords.forEach(keyword =>{
        if(tweet.toLowerCase().includes(keyword)){
            number_of_happyTweets++
        }
            
    })
 })

  console.log(`Number of happy tweets : ${number_of_happyTweets}`);
 

  console.log("****************italicized textQ14: What fraction of the total number of tweets are happy?************")

  let happyFraction=0;
  let tweetscount = tweets.length;
  if(number_of_happyTweets>0){
     happyFraction =(number_of_happyTweets/tweetscount);
  }
  console.log("The fraction of sad tweets is:", happyFraction)


  console.log("****************Determine the number of tweets in the dataset that can be classified as sad**********************")
  let number_of_sad_tweets =0;
  tweets.forEach(tweet =>{
    sadWords.forEach(keyword =>{
        if(tweet.toLowerCase().includes(keyword)){
            number_of_sad_tweets++
        }
            
    })
 })

  
  console.log(`Sad tweets are : ${number_of_sad_tweets}`);

  console.log("****************italicized textQ14: What fraction of the total number of tweets are sad?************")

  let sadFraction=0;
  if(number_of_sad_tweets>0){
     happyFraction =(number_of_sad_tweets/tweetscount);
  }
  console.log("The fraction of sad tweets is:", sadFraction)