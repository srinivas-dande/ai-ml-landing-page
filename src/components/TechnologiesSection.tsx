"use client";
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const technologies = [
  // Row 1
  { name: 'NumPy', image: '/images/tech/numpy.png' },
  { name: 'Seaborn', image: '/images/tech/seaborn.png' },
  { name: 'Pandas', image: '/images/tech/pandas.png' },
  { name: 'AWS', image: '/images/tech/aws.png' },
  { name: 'Google Colab', image: '/images/tech/googlecolab.png' },
  { name: 'Pinecone', image: '/images/tech/pinecone.png' },
  { name: 'Scikit-learn', image: '/images/tech/sklearn.png' },
  { name: 'Kubernetes', image: '/images/tech/kubernetes.png' },
  { name: 'Kubeflow', image: '/images/tech/kubeflow.png' },
  { name: 'TensorFlow', image: '/images/tech/tensorflow.png' },
  { name: 'Keras', image: '/images/tech/keras.png' },
  { name: 'OpenAI', image: '/images/tech/openai.png' },
  // Row 2
  { name: 'MLflow', image: '/images/tech/mlflow.png' },
  { name: 'Hugging Face', image: '/images/tech/huggingface.png' },
  { name: 'PyTorch', image: '/images/tech/pytorch.png' },
  { name: 'LangChain', image: '/images/tech/langchain.png' },
  { name: 'MySQL', image: '/images/tech/mysql.png' },
  { name: 'Docker', image: '/images/tech/docker.png' },
  { name: 'DVC', image: '/images/tech/dvc.png' },
  { name: 'Python', image: '/images/tech/python.png' },
  { name: 'Matplotlib', image: '/images/tech/matplotlib.png' },
  { name: 'LlamaIndex', image: '/images/tech/llamaindex.png' },
  { name: 'Apache Airflow', image: '/images/tech/apacheairflow.png' },
  { name: 'ChromaDB', image: '/images/tech/chromadb.png' },
]

export default function TechnologiesSection() {
  return (
    <section className="relative bg-[#F0F4F8] py-16 px-4 md:px-8 overflow-hidden">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      ></div>

      <div className="relative max-w-[1300px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Advanced <span className="text-[#C41E3A]">Artificial intelligence</span> course
          <br />
          path, explained simply
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          This session covers an artificial intelligence and machine learning course roadmap
          you can follow as an artificial intelligence online course.
        </p>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 relative mb-2 flex items-center justify-center">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-700 text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#C41E3A] hover:bg-[#a31830] text-white font-medium py-3 px-6 rounded-lg flex items-center gap-3 transition-colors"
          >
            Register For Free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
