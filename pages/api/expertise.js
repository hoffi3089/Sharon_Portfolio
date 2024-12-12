const expertise = [
  {
    id: 0,
    title: "Full Stack blockchain Development",
    desc: "As a Full Stack Blockchain Developer, I specialize in designing and developing decentralized applications (dApps), smart contracts, and blockchain-based solutions across multiple platforms. My expertise includes working with public and private blockchain networks, smart contract development, and integrating blockchain with traditional web technologies. I have a deep understanding of cryptography, consensus mechanisms, and distributed systems, enabling me to create secure and scalable blockchain applications.",
  },
  {
    id: 1,
    title: "Bot Developement",
    desc: "As a highly skilled bot developer, I specialize in creating advanced, intelligent, and automated solutions tailored to streamline processes, enhance user experiences, and improve business operations. With extensive experience in building bots across various platforms, including chatbots, trading bots, volume booster bots, web scraping bots, and workflow automation, I bring a unique blend of technical proficiency and strategic insight to every project.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Passionate and skilled mobile app developer with extensive experience in React Native, specializing in designing, developing, and deploying cutting-edge cross-platform applications. I excel at creating seamless, high-performance, and visually stunning apps that deliver exceptional user experiences. Proficient in JavaScript, TypeScript, and mobile best practices, I focus on scalable, maintainable, and innovative solutions. A dependable partner for startups and enterprises, I turn ideas into impactful apps aligned with business goals.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
