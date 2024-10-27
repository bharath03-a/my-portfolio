// src/app/skills.tsx
import "../app/globals.css";
import { motion } from "framer-motion";
import Layout from "@/components/Layout"; // Assuming you have a Layout component

const skills = [
  { name: "Airflow", icon: "/icons/airflow.svg" },
  { name: "Apache Spark", icon: "/icons/apache-spark.svg" },
  { name: "Asana", icon: "/icons/asana.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "AWS EC2", icon: "/icons/aws-ec2.svg" },
  { name: "AWS Lambda", icon: "/icons/aws-lambda.svg" },
  { name: "AWS S3", icon: "/icons/aws-s3.svg" },
  { name: "Conda", icon: "/icons/conda.svg" },
  { name: "DBT", icon: "/icons/dbt.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Git", icon: "/icons/git-icon.svg" },
  { name: "GitHub", icon: "/icons/github-icon.svg" },
  { name: "Google Cloud", icon: "/icons/google-cloud.svg" },
  { name: "Google Cloud Functions", icon: "/icons/google-cloud-functions.svg" },
  { name: "Google Cloud Run", icon: "/icons/google-cloud-run.svg" },
  { name: "Hadoop", icon: "/icons/hadoop.svg" },
  { name: "HashiCorp", icon: "/icons/hashicorp.svg" },
  { name: "Hugging Face", icon: "/icons/hugging-face.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Jira", icon: "/icons/jira.svg" },
  { name: "Kafka", icon: "/icons/kafka.svg" },
  { name: "Looker", icon: "/icons/looker-icon.svg" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "NumPy", icon: "/icons/numpy.svg" },
  { name: "Pandas", icon: "/icons/pandas.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "PyTorch", icon: "/icons/pytorch.svg" },
  { name: "Scala", icon: "/icons/scala.svg" },
  { name: "Seaborn", icon: "/icons/seaborn.svg" },
  { name: "Snowflake", icon: "/icons/snowflake.svg" },
  { name: "SonarCloud", icon: "/icons/sonarcloud.svg" },
  { name: "SonarLint", icon: "/icons/sonarlint-icon.svg" },
  { name: "Tableau", icon: "/icons/tableau-icon.svg" },
  { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  { name: "Terraform", icon: "/icons/terraform.svg" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function SkillsPage() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-grey-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-16"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <span className="text-xl">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </Layout>
  );
}
