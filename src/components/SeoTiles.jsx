import seoTrigger from '../elements/seoTriggers'

export default function SeoFriend() {
    return (
        <>
            <div className="seo__section grid-cols-1 md:grid-cols-3 grid gap-4 pt-20" >
                  {seoTrigger.map(item => {
                    return (
                      <div class="w-full text-center ">
                      <div class=" ">
                        <img src={item.img} className="text-center mx-auto"/>
                        <h5 class="tile__header">{item.title}</h5>
                        <p class="tile__text">{item.text}</p>
                      </div>
                    </div>
                    )
                  })}
     
            </div>
        </>
    )
}