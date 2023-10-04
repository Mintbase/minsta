import { FETCH_FEED } from "@/data/queries/feed.graphl"
import useInfiniteScrollGQL from "@/hooks/useInfiniteScroll"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useIntersectionObserver } from 'usehooks-ts'

const FeedScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const router = useRouter()


  const { items, loadingItems, total, error } = useInfiniteScrollGQL(
     "q_FETCH_FEED",
    isVisible,
    { query: FETCH_FEED }
  )

  const cssClass = total == 0 || total == undefined ? null : `mb-Search`

  if (error) {
    return <> Error.</>
  }

  return (
     
      <SectionTitle label={label} val={total} isContractPage />
      <GridDynamic mdCols={2} nColsXl={4} nColsXXl={6}>
        {items?.map((user, index) => {
          const cardInfo = {
            title: user?.account,
            centerElement: (
              <div className='relative h-full w-full'>
                <Image
                  alt='user header'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL='/images/mintbase-symbol-250x250.png'
                  src={
                    user?.headerImage ||
                    profileEmptyImage[getCurrentTheme(theme)]
                  }
                />
              </div>
            ),
          }

          return (
            <div className={''} key={`${index}`}>
              <Link
                key={user?.account + index}
                href={humanPageUrl(user?.account)}
                passHref
              >
                <a>
                  <MbSmallCard
                    key={`${index}-${user.name}`}
                    cardType={ESmallCardType.PROFILE}
                    card={cardInfo}
                  />
                </a>
              </Link>
            </div>
          )
        })}
        {loadingItems?.map((item, i) => (
          <div key={i} id='metacard-loading' ref={ref}>
            <MbSmallCard
              key={i}
              loading={true}
              cardType={ESmallCardType.PROFILE}
              card={null}
            />
          </div>
        ))}
      </GridDynamic>
    </div>
  )
}