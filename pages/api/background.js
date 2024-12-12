const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "University of Science and Technology Beijing",
        degree: "BS, Computer Science Engineering",
        detail: "Bachelor's Degree in Computer Science Engineering from USTB.",
        year: "2014-2018",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Freelancer",
        role: "Full Stack Blockchain Developer",
        desc: ` Successfully completed multiple blockchain-based projects for diverse clients, including the development and deployment of smart contracts on Ethereum and Solana networks.
                        Worked closely with clients to understand project requirements, providing blockchain solutions that enhanced security, transparency, and efficiency.
                        Integrated blockchain technology with front-end and back-end systems, creating seamless user experiences in decentralized applications (dApps).
                        Developed gas-efficient smart contracts, optimizing transaction costs and improving performance for end users.`,
        year: "04/2022 - Present",
        location: "Remote",
      },
      {
        id: 2,
        title: "OG ROARING KITTY",
        role: "Blockchain Developer",
        url: "https://ogroaringkitty.com/",
        desc: `  Collaborated in the development and deployment of the $ROAR token on the Ethereum blockchain.
                    Ensured decentralization by burning the liquidity pool LP and renouncing the contract, making the project 100% community owned.
                    Designed tokenomics and the ecosystem in a way to enable rapid growth and participation while maintaining stability and sustainability.
                    Developed smart contracts and facilitated the deployment of the NFT collection, leveraging the Ethereum network to provide unique digital assets for the community.`,
        year: "10/2020 - 03/2022",
        location: "San Francisco, CA",
      },
      {
        id: 3,
        title: "America Build Technology Inc",
        role: "Full Stack Developer",
        url: "http://www.americabuildtechnology.com",
        desc: ` Built responsive web applications using React and Node.js, contributing to high customer engagement through improved UI/UX.\n 
                        Enhanced back-end performance and database efficiency by designing optimized queries and data storage solutions.\n 
                        Coordinated with UI/UX designers to implement interactive and intuitive user interfaces, achieving a mention any positive impact, like improved user retention or faster page load times. 
                        Implemented RESTful APIs for secure, scalable data exchange between front-end and back-end systems.`,
        year: "05/2019 - 09/2020",
        location: "Miami, FL",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
