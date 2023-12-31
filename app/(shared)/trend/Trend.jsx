
const Trend=({id,name,number})=>{
    return(
        <section className=' flex justify-between pb-4 p-1 border-b-[1px] border-handle '>
            <div className=''>
                <span className=' text-vsm text-handle '>{id}. Trending</span>
                <h4 className=' text-tweet text-custom font-bold '>{name}</h4>
                <span className='text-sm text-handle'>{number} Tweets</span>
            </div>
            <div className=''>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4713 5.43133C13.2113 5.17133 12.7893 5.17133 12.5286 5.43133L7.99995 9.95999L3.47128 5.43133C3.21128 5.17133 2.78928 5.17133 2.52862 5.43133C2.26862 5.69133 2.26862 6.11333 2.52862 6.37399L7.52862 11.374C7.65862 11.5047 7.82862 11.57 7.99995 11.57C8.17128 11.57 8.34128 11.5047 8.47128 11.3747L13.4713 6.37466C13.7313 6.11466 13.7313 5.69333 13.4713 5.43266V5.43133Z" fill="#828282"/>
</svg>

            </div>
        </section>
    )
}


export default Trend 