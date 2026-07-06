import memojiAvatar1 from "@/assets/images/memoji-avatar-1.jpeg";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.jpeg";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.jpeg";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.jpeg";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.jpeg";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";
import { Card } from "../components/Card";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Jenkins",
    position: "Founder @ AlphaTech Solutions",
    text: "Abdul Khalil is an absolute wizard when it comes to frontend development. He transformed our outdated website into a modern, lightning-fast application. Highly recommended!",
    avatar: memojiAvatar1,
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    position: "Product Manager @ DevStream",
    text: "Professional, reliable, and delivered beyond expectations.",
    avatar: memojiAvatar2,
    rating: 5,
  },
  {
    name: "Omar Hassan",
    position: "Startup Founder",
    text: "Working with Khalil was a fantastic experience. His attention to detail, clean coding practices, and ability to deliver complex pixel-perfect UI on time exceeded our expectations.",
    avatar: memojiAvatar3,
    rating: 4,
  },
  {
    name: "Ethan Walker",
    position: "CTO @ CloudNexus",
    text: "Khalil is an exceptional developer who truly understands React and responsive design. The codebase he delivered is clean, well-structured, and incredibly easy for our team to maintain.",
    avatar: memojiAvatar4,
    rating: 5,
  },
  {
    name: "Sophia Lin",
    position: "Marketing Head @ GrowthScale",
    text: "Abdul delivered exceptional quality, clear communication, and exceeded every project expectation with professionalism.",
    avatar: memojiAvatar5,
    rating: 4.8,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 lg:py-24 flex items-center justify-center">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex justify-center items-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="size-24 max-h-full rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                    {/* Dynamic Stars Loop */}
                    <div className="flex items-center mt-1 gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                          key={index}
                          className={`md:size-4 size-3 ${
                            index < testimonial.rating
                              ? "text-amber-500"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
