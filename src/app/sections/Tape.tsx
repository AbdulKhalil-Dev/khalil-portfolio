import { HiSparkles } from "react-icons/hi2";
import { Fragment } from "react/jsx-runtime";

const words= [
  "Responsive",
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "Creative",
  "User-Friendly",
  "Maintainable",
  "SEO-Friendly",
  "Reliable",
  "Modern",
]

const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
        {[...new Array(2)].fill(0).map((_, idx)=>(
          <Fragment key={idx}>
          {words.map(word => (
        <div key={word} className="inline-flex gap-4 items-center">
          <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
          <HiSparkles className="size-5 text-gray-900 -rotate-12"/>
        </div>
      ))}
      </Fragment>
        ))}
      
      </div>
      </div>
      </div>
    </div>
  )
}

export default Tape