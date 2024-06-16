import { useState } from "react"

const Accordion = () => {
    const [arrow, setArrow] = useState(false)
  return (
    <div className="max-w-[400px]" onClick={() => setArrow(!arrow)}>
  <div className="flex justify-between">
    <h2>What is your name?</h2>
    <p className={`text-2xl font-bold ${arrow ? "" : "rotate-180"}`}>^</p>
  </div>
  <div className={`${!arrow ? "hidden" : ""}`}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum sit laborum quibusdam dignissimos, repudiandae et incidunt necessitatibus error quam magnam eveniet commodi debitis tempora, quasi quidem modi at consequatur!
    Nobis blanditiis consequuntur commodi quae porro maiores quas ab repellendus consequatur voluptatibus, non excepturi iste cumque. Sit consequatur debitis cupiditate consectetur perspiciatis laborum cumque, dolorum asperiores accusamus obcaecati ut rem.</p>
  </div>
</div>
  )
}

export default Accordion