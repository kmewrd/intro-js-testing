class Tweet {
  constructor(sender, content) {
    this.sender = sender;
    this.content = content;
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
  }
  like() {
    this.likes += 1;
  }
}

module.exports = Tweet;
