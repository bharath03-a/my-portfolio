import "../app/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";

// src/app/about.tsx

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Bharath | About</title>
        <meta
          name="description"
          content="About Bharath - A Data Engineer and Data Science Enthusiast skilled in cloud platforms, ETL pipelines, and machine learning."
        />
      </Head>
      <Layout>
        <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6">
          {/* Title */}
          <h1 className="mt-8 text-5xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            About Me
          </h1>

          {/* Introduction */}
          <p className="mt-6 text-lg max-w-2xl text-center leading-relaxed text-gray-200">
            Hello! I'm Bharath, a passionate <span className="font-semibold text-yellow-400">Data Engineer</span> and 
            <span className="font-semibold text-yellow-400"> Data Science Enthusiast</span>. I love diving into complex datasets 
            and transforming them into powerful insights. From engineering data pipelines to optimizing ML models, I’m all about 
            building solutions that make a difference.
          </p>

          {/* What I Do */}
          <h2 className="mt-8 text-3xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            What I Do
          </h2>
          <p className="mt-4 max-w-2xl text-center text-gray-300">
            I've had the pleasure of working at <span className="font-semibold text-yellow-400">Mayo Clinic</span>, 
            <span className="font-semibold text-yellow-400"> HSBC</span>, and <span className="font-semibold text-yellow-400">SpringML</span>, 
            where I designed data migration systems, created user-friendly data tools, and led projects to improve data processing efficiency. 
            From ETL pipelines to cloud deployments, I’m constantly learning and exploring new ways to unlock the full potential of data.
          </p>

          {/* Skills */}
          <h2 className="mt-8 text-3xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            My Skills
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2 max-w-lg">
            <li><span className="font-semibold">Languages:</span> Python, R, Java, SQL, C++</li>
            <li><span className="font-semibold">Data Tools:</span> TensorFlow, Scikit-Learn, PyTorch, Pandas, NumPy</li>
            <li><span className="font-semibold">Cloud Platforms:</span> Google Cloud, AWS</li>
            <li><span className="font-semibold">Data Engineering:</span> Apache Beam, Airflow, Hadoop, Spark</li>
            <li><span className="font-semibold">Visualization:</span> Tableau, Looker, R Shiny, Matplotlib</li>
          </ul>

          {/* Interests */}
          <h2 className="mt-8 text-3xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            My Interests
          </h2>
          <p className="mt-4 max-w-2xl text-center text-gray-300">
            Beyond work, I'm always looking to learn something new, whether it's the latest in ML algorithms or how to contribute to open-source 
            projects. I enjoy connecting with fellow data enthusiasts, experimenting with new tools, and finding creative ways to visualize complex data.
          </p>
        </main>
      </Layout>
    </>
  );
}
