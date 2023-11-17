import {PostData} from '@/app/(data)/Data'
import TwitterCard from '@/app/(shared)/twitterCard/TwitterCard'

const Container = () => {

    const mapped= PostData.map(elem=>(<TwitterCard key={elem.handle} source={elem.source} username={elem.username} handle={elem.handle} post={elem.post} postImg={elem.postImg} />))

  return (
    <>
      {mapped}
    </>
  )
}

export default Container
