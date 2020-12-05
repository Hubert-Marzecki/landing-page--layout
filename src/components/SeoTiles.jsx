import seoTrigger from '../elements/seoTriggers'

export default function SeoFriend() {
    return (
        <>
            <div className="seo__section grid-cols-1 md:grid-cols-3 grid gap-4 " >
                  {seoTrigger.map(item => {
                    return (
                      <div class="p-4  w-full text-center ">
                      <div class=" px-4 py-6 rounded-lg ">
                        <img src={item.img} className="mx-0 text-center w-16 mx-auto"/>
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