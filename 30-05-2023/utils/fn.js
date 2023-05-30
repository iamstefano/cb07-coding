export const cE = (el) => document.createElement(el);

export const tweetGen = (tweetData) => {
  const tweetWrapperEl = cE("div");
  const tweetContainerColumn = cE("div");
  const userAvatarTweet = cE("img");
  const tweetContentEl = cE("div");
  const nameEl = cE("span");
  const userNameEl = cE("span");
  const textContentEl = cE("p");
  const reactionsEl = cE("p");
  const avatarPlaceholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  // Optional chaining alternative (sotto)  --->
  // if(tweetData.user.image) userAvatarTweet.src = tweetData.user.image || avatarPlaceholder;

  tweetWrapperEl.className = "tweet_wrapper_card";
  tweetContainerColumn.className = "tweet_container";

  userAvatarTweet.src = tweetData.user?.image || avatarPlaceholder;
  ("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg");
  userAvatarTweet.alt = tweetData.user?.username;
  userAvatarTweet.className = "user_avatar_tweet";
  tweetContentEl.className = "tweet_content";

  nameEl.textContent = tweetData.user?.firstName;
  userNameEl.textContent = "@" + tweetData.user?.username;
  textContentEl.textContent = tweetData.body;
  reactionsEl.textContent = tweetData.reactions;

  tweetContentEl.append(nameEl, userNameEl, textContentEl, reactionsEl);
  tweetWrapperEl.append(userAvatarTweet, tweetContentEl);

  return tweetWrapperEl;
};
