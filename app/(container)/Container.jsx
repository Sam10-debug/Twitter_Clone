'use client'
import {PostData} from '@/app/(data)/Data'
import TwitterCard from '@/app/(shared)/twitterCard/TwitterCard'
import TweetCard from '@/app/(shared)/tweetCard/TweetCard'
import {useData} from '@/app/(context)/DataContext'

const Container = () => {

  const {tweet}= useData()

    const mapped= PostData.map(elem=>(<TwitterCard key={elem.handle} source={elem.source} username={elem.username} handle={elem.handle} post={elem.post} postImg={elem.postImg} />))
    const mappedTweet= tweet.map(elem=>(<TweetCard key={elem} tweet={elem} />))

  return (
    <>
      {mapped}
      {mappedTweet}
    </>
  )
}

export default Container
