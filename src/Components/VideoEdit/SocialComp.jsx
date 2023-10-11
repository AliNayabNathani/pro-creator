import React from 'react';
import SocialMediaCard from './Card/SocialMediaCard';

const SocialComp = () => {
  const dummyData = {
    posts: [
      {
        title: 'Threads by Instagram',
        content: `
          Post 1: 🌟 How did Mr. Beast achieve YouTube success? From no money to
          a dollar a day, he reinvested and worked hard for a decade. Dedication
          pays off! 💪 #YoutubeSuccessStory\n\n
          Post 2: 🌎 Did you know that less than 10% of the world speaks
          English? That means 90% is missing out on English content. Let's
          embrace diversity and create content for everyone! 🌍 #ContentForAll\n\n
          Post 3: 🚀 Spanish R1 is the biggest channel! Spanish-speaking content
          is thriving. Tap into the potential of other languages and cultures.
          Expand your reach! 🌎 #LanguageIsKey\n\n
          Post 4: 🎥 Want to become a YouTuber? Learning from mistakes and
          improving is crucial. Join a community that fosters growth and shares
          insights. Together, we can achieve success! 🤝 #CommunityOfCreators\n\n
          Post 5: 💔 School can be challenging for those with different
          passions. Don't let society dictate your destiny. Embrace your
          obsessions, work hard, and prove the skeptics wrong! 💯 #DreamBig
        `,
      },
      {
        title: 'Youtube to Tweets',
        content: `
          Post 1: 🌟 How did Mr. Beast achieve YouTube success? From no money to a dollar a day, he reinvested and worked hard for a decade. Dedication pays off! 💪 #YoutubeSuccessStory\n\n
          Post 2: 🌎 Did you know that less than 10% of the world speaks English? That means 90% is missing out on English content. Let's embrace diversity and create content for everyone! 🌍 #ContentForAll\n\n
          Post 3: 🚀 Spanish R1 is the biggest channel! Spanish-speaking content is thriving. Tap into the potential of other languages and cultures. Expand your reach! 🌎 #LanguageIsKey\n\n
          Post 4: 🎥 Want to become a YouTuber? Learning from mistakes and improving is crucial. Join a community that fosters growth and shares insights. Together, we can achieve success! 🤝 #CommunityOfCreators\n\n
          Post 5: 💔 School can be challenging for those with different passions. Don't let society dictate your destiny. Embrace your obsessions, work hard, and prove the skeptics wrong! 💯 #DreamBig
        `,
      },
    ],
  };

  return (
    <>
      {dummyData.posts.map((post, index) => (
        <SocialMediaCard key={index} data={post} />
      ))}
    </>
  );
};

export default SocialComp;
