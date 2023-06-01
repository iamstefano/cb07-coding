export const cE = (el) => document.createElement(el);

export const tweetGen = (tweetData) => {
  const tweetWrapperEl = cE("div");
  const tweetContainerColumn = cE("div");
  const userAvatarTweet = cE("img");
  const tweetContentEl = cE("div");
  const tweetHeaderUser = cE("div");
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
  tweetHeaderUser.className = "tweet_header_user";

  nameEl.textContent = tweetData.user?.firstName;
  userNameEl.textContent = "" + tweetData.user?.username;
  userNameEl.prepend("@");
  textContentEl.textContent = tweetData.body;
  reactionsEl.textContent = "❤️" + tweetData.reactions;

  tweetContentEl.append(tweetHeaderUser, textContentEl, reactionsEl);
  tweetHeaderUser.append(nameEl, userNameEl);
  tweetContainerColumn.append(userAvatarTweet, tweetContentEl);
  tweetWrapperEl.append(tweetContainerColumn);

  return tweetWrapperEl;
};

export const followGen = (user) => {
  // image Placeholder
  const imagePlaceholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  const followEl = cE("div");
  const followImgEl = cE("img");
  const followUser = cE("div");
  const followUserInfo = cE("div");
  const followName = cE("p");
  const followUsername = cE("p");
  const followButton = cE("div");

  followEl.className = "follow__item";
  followImgEl.className = "follow__image";
  followUserInfo.className = "follow__userInfo";
  followUser.className = "follow__user";
  followName.className = "follow__name";
  followUsername.className = "follow__username";
  followButton.className = "follow__button";

  followImgEl.src = user?.image || imagePlaceholder;
  followImgEl.alt = user?.username;

  followName.textContent = user?.firstName + " " + user?.lastName;
  followUsername.textContent = "@" + user?.username;
  followButton.textContent = "Segui";

  followUserInfo.append(followName, followUsername);
  followUser.append(followUserInfo, followButton);
  followEl.append(followImgEl, followUser);

  return followEl;
};
