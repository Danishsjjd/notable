import { Bold, Image, List } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Bold,
      name: "Rich Formatting",
      description: "Easily format your text with bold, italic, and more.",
    },
    {
      icon: List,
      name: "Structured Content",
      description: "Create organized lists and structured documents effortlessly.",
    },
    {
      icon: Image,
      name: "Media Integration",
      description: "Seamlessly embed images, videos, and other media into your content.",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">We offer the best experience</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.name}</h3>
              <p className="mb-4 text-gray-600">{feature.description}</p>
              <a href="#" className="text-blue-600 hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Ready to elevate your content?</h3>
          {/* // TODO: sign in  */}
          <button className="rounded-full bg-blue-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
