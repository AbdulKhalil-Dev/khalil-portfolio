import memojiAvatar1 from "@/assets/images/memoji-avatar-1.jpeg";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.jpeg";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.jpeg";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.jpeg";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.jpeg";
import SectionHeader from '../components/SectionHeader';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
// import { Card } from "../components/Card";



const testimonials = [
  {
    name: "Sarah Jenkins",
    position: "Founder @ AlphaTech Solutions",
    text: "Abdul Khalil is an absolute wizard when it comes to frontend development. He transformed our outdated website into a modern, lightning-fast application. Highly recommended!",
    avatar: memojiAvatar1,
  },
  {
    name: "David Miller",
    position: "Product Manager @ DevStream",
    text: "Working with Khalil was a fantastic experience. His attention to detail, clean coding practices, and ability to deliver complex pixel-perfect UI on time exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Elena Rostova",
    position: "Creative Director @ PixelVibe Studio",
    text: "Abdul Khalil didn't just build our web app; he significantly optimized its performance. Our conversion rates went up by 40% thanks to the smooth animations and seamless UX.",
    avatar: memojiAvatar3,
  },
  {
    name: "Marcus Thorne",
    position: "CTO @ CloudNexus",
    text: "Khalil is an exceptional developer who truly understands React and responsive design. The codebase he delivered is clean, well-structured, and incredibly easy for our team to maintain.",
    avatar: memojiAvatar4,
  },
  {
    name: "Sophia Lin",
    position: "Marketing Head @ GrowthScale",
    text: "Abdul Khalil turned our design concepts into a highly scalable web application. His communication throughout the project was top-notch, and his technical expertise is unmatched.",
    avatar: memojiAvatar5,
  },
];


const Testimonials = () => {
  return (
    <div className='py-16'>
      <div className="container">
      <SectionHeader eyebrow='Happy Clients' title='What Clients Say about Me' description='Don&apos;t just take my word for it. See what my clients have to say about my work.'/>
      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className='bg-gray-800 rounded-3xl p-6 relative overflow-hidden z-0'>
          <div className="absolute inset-0 opacity-5 -z-10" style={{backgroundImage: `url(${grainImage.src})`}}></div>
            <Image src={testimonial.avatar} alt={Testimonials.name} />
            <div>{testimonial.name}</div>
            <div>{testimonial.position}</div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Testimonials