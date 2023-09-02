const BarProgresPokemon = ({stat}) => {

   const getPercentBar = (statValue) =>{
        const maxValue = 255
        const percent = (statValue * 100) / maxValue
        return `${percent}%`
   }
    
  return (
    <article className="px-3">
        <section className="flex justify-between">
            <h5>{stat.name}</h5>
            <span>{stat.value}</span>
        </section>
        <div className="h-6 bg-slate-300 rounded-md">
            <div style={{width:  getPercentBar(stat.value)}} className="h-full bg-gradient-to-r from-[#FCD676]  to-[#E6901E]"></div>
        </div>
    </article>
  )
}
export default BarProgresPokemon