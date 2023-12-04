// @ts-ignore
import {CardsContent} from './cardsContent.tsx';



export const Cards = ({posts, remover, date}) => {

    return (
                <div className={"border-solid border-[#A4B69E] rounded-3xl mt-10 flex gap-20 flex-wrap justify-center"}>
                        {
                            posts.map((post, index) =>
                                <CardsContent remove={remover} number={index+1} post={post} key={post.id}/>
                            )
                        }
                    </div>

    )

}